<template>
  <ion-modal
    :is-open="open"
    @didDismiss="resetOpen"
  >
    <div style="display: flex;flex-direction: column; height: 100%;">
      <ion-header>
        <ion-toolbar>
          <ion-buttons
            slot="secondary"
            @click="resetOpen()"
          >
            <ion-button fill="clear">
              {{ t('addConsumable.doClose') }}
            </ion-button>
          </ion-buttons>
          <ion-title>{{ t('addConsumable.title') }}</ion-title>
        </ion-toolbar>
      </ion-header>
      <div style="flex-grow: 1;">
        <ion-content
          :scroll-y="false"
        >
          <ion-list lines="full">
            <ion-item>
              <ion-label position="floating">
                {{ t('addConsumable.productName') }}
              </ion-label><ion-input v-model="consumable.name" />
            </ion-item>

            <ion-item>
              <ion-label position="floating">
                {{ t('addConsumable.price') }}
              </ion-label>
              <ion-input
                v-model="consumable.singlePrice"
                inputmode="decimal"
                type="number"
              />
            </ion-item>
          </ion-list>
        </ion-content>
      </div>
      <ion-footer>
        <ion-button
          expand="full"
          class="ion-no-margin"
          :disabled="!complete"
          @click="add()"
        >
          {{ t('addConsumable.doAdd') }}
        </ion-button>
      </ion-footer>
    </div>
  </ion-modal>
</template>

<script lang="ts">
import {
  computed, defineComponent, inject, toRefs, Ref, ref, watch, reactive,
} from 'vue';
import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonContent,
  IonButton,
  IonButtons,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonFooter,
} from '@ionic/vue';
import { useI18n } from 'vue-i18n';
import { useConsumedStore } from '@/store/consumed';

export default defineComponent({
  components: {
    IonModal,
    IonHeader,
    IonToolbar,
    IonContent,
    IonButton,
    IonButtons,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonFooter,

  },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const { open } = toRefs(props);
    const openLoc = computed({
      get: () => open.value,
      set: (value) => {
        emit('update:open', value);
      },
    });
    const parent = inject('modal-parent') as Ref<any>;
    const parentOutlet = computed(() => {
      if (parent.value === null) return undefined;
      return parent.value.$refs.ionRouterOutlet;
    });
    const resetOpen = () => {
      openLoc.value = false;
    };
    // console.log(instance);
    // search

    const { t } = useI18n();

    const consumable = reactive({
      name: '',
      singlePrice: undefined as string | number | undefined,
    });
    const complete = computed(() => {
      const inputOkay = consumable.name !== '';
      // eslint-disable-next-line no-useless-escape
      const formatOkay = (consumable.singlePrice === undefined || consumable.singlePrice === '') ? true : (typeof consumable.singlePrice === 'string') && consumable.singlePrice.match(/^\d+([\.|,]\d{1,2})?$/);
      return inputOkay && formatOkay;
    });

    const consumedStore = useConsumedStore();

    const add = () => {
      if (typeof consumable.singlePrice !== 'number') {
        if (consumable.singlePrice === '') consumable.singlePrice = undefined;
        if (consumable.singlePrice !== undefined) {
          consumable.singlePrice = parseFloat(`${consumable.singlePrice}`.replace(',', '.').replace(/(\.{2,})/, '.'));
        }
      }
      consumedStore.add(consumable as any);
      openLoc.value = false;
      emit('added');
    };

    return {
      openLoc,
      parent: parentOutlet,
      resetOpen,
      consumable,
      add,
      complete,
      t,
    };
  },
});
</script>

<style scoped>
ion-modal {
    --height: 400px;
    --border-radius: 16px;
    --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  }
</style>
