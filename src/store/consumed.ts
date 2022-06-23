import { defineStore } from 'pinia';
import { computed, ref, watch } from 'vue';
import { omit } from 'lodash';
import { initPersistence } from './persistence';

export interface Consumable {
  name: string;
  singlePrice: number;
}

export interface Consumed extends Consumable {
  count: number;
}

export const useConsumedStore = defineStore('consumed', () => {
  let persistenceStore: any = null;
  const consumed = ref<Consumed[]>([]);
  const init = async () => {
    const ps = await initPersistence();
    const saved = await ps.get('consumed');
    if (saved !== null) {
      consumed.value = JSON.parse(saved);
    }
    persistenceStore = ps;
  };
  init();
  const add = (c: Consumable) => {
    const exists = consumed.value.find((c2) => c2.name === c.name);
    if (exists === undefined) {
      consumed.value = [...consumed.value, { ...c, count: 1 }];
    } else {
      exists.count += 1;
    }
  };

  const removeConsumption = (name: string, count = -1) => {
    if (count === -1) {
      consumed.value = consumed.value.filter((c2) => c2.name !== name);
      return;
    }
    const exists = consumed.value.find((c2) => c2.name === name);
    if (exists === undefined) return;
    exists.count -= count;
    if (exists.count <= 0) {
      consumed.value = consumed.value.filter((c2) => c2.name !== name);
    }
  };

  watch(consumed, (nVal) => {
    if (persistenceStore == null) return;
    persistenceStore.set('consumed', JSON.stringify(nVal));
  });

  const consumables = computed(() => consumed.value.map((c) => ({ ...omit(c, 'count') } as Consumable)));

  return {
    consumed,
    consumables,
    removeConsumption,
    add,
  };
});
