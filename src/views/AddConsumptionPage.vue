<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button />
        </ion-buttons>
        <ion-title>{{ t('addConsumptionPage.title') }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">
            {{ t('addConsumptionPage.title') }}
          </ion-title>
        </ion-toolbar>
      </ion-header>
      <div class="consumable-list">
        <div
          v-for="(c, key) in consumables"
          :key="key"
          class="consumable"
        >
          <consumable-card
            v-bind="c"
            @click="add(c)"
          />
        </div>
        <div class="consumable">
          <new-card @click="addConsumableOpen = true" />
        </div>
      </div>
      <add-consumable
        v-model:open="addConsumableOpen"
        @added="back()"
      />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent, IonHeader, IonButtons, IonLabel, IonBackButton, IonIcon, IonPage, IonTitle, IonToolbar,
} from '@ionic/vue';
import ConsumableCard from '@/components/ConsumableCard.vue';
import NewCard from '@/components/NewCard.vue';
import { addOutline, cardOutline } from 'ionicons/icons';
import { computed, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { Consumable, useConsumedStore } from '../store/consumed';
import AddConsumable from './AddConsumable.vue';

export default defineComponent({
  name: 'AddConsumptionPage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    ConsumableCard,
    IonButtons,
    IonBackButton,
    NewCard,
    AddConsumable,
  },
  setup() {
    const { t, n } = useI18n();
    const consumedStore = useConsumedStore();
    const consumables = computed(() => consumedStore.consumables);
    const router = useRouter();
    const add = (consumable: Consumable) => {
      consumedStore.add(consumable);
      router.back();
    };
    const back = () => {
      router.back();
    };
    return {
      t,
      n,
      add,
      consumables,
      back,
      icons: {
        addOutline,
        cardOutline,
      },
    };
  },
  data() {
    return {
      addConsumableOpen: false,
    };
  },
  computed: {
    // consumed()  {
    //   return [
    //     {
    //       name: 'Bier',
    //       singlePrice: 4.3,
    //       count: 1
    //     },
    //     {
    //       name: 'Wodka',
    //       singlePrice: 3.5,
    //       count: 4
    //     },
    //     {
    //       name: 'Wein',
    //       singlePrice: 2.5,
    //       count: 3
    //     },
    //   ]
    // },
  },
  methods: {},
});
</script>
<style lang="less" scoped>
.consumable-list {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  .consumable {
    display: flex;
    flex-direction: row;
    flex-basis: 50%;
    max-width: 50%;
  }
}
</style>
