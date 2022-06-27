<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>{{ t('consumptionPage.title') }}</ion-title>
        <ion-buttons slot="end">
          <ion-button
            :disabled="totalPrice <= 0"
            :router-link="{ name: 'consumption:pay' }"
            router-direction="forward"
          >
            <ion-icon :icon="icons.cardOutline" /> <ion-label>{{ t('consumptionPage.doPay') }}</ion-label>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">
            {{ t('consumptionPage.title') }}
          </ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list v-if="consumed.length > 0">
        <consumption-list-item
          v-for="(c, key) in consumed"
          :key="key"
          v-bind="c"
          @remove-one="remove(c.name, 1)"
          @remove-all="remove(c.name)"
        />
      </ion-list>
      <div
        v-if="consumed.length <= 0"
        class="empty"
      >
        <img
          class="illustration"
          src="../assets/team.svg"
          alt="Empty"
        >
        <h2>{{ t('consumptionPage.empty') }}</h2>
      </div>
      <ion-fab
        slot="fixed"
        horizontal="center"
        vertical="bottom"
        :edge="true"
      >
        <ion-fab-button
          :router-link="{ name: 'consumption:add' }"
          router-direction="forward"
        >
          <ion-icon :icon="icons.addOutline" />
        </ion-fab-button>
      </ion-fab>
    </ion-content>
    <ion-footer>
      <div class="total-price">
        <ion-label>
          {{ t('consumptionPage.totalPrice') }}
          <span class="price">{{ totalPriceFormatted }}</span>
        </ion-label>
      </div>
    </ion-footer>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent, IonHeader, IonFooter, IonButtons, IonButton, IonLabel, IonList, IonIcon, IonPage, IonTitle, IonToolbar,
  IonFab,
  IonFabButton,
} from '@ionic/vue';
import ConsumptionListItem from '@/components/ConsumptionListItem.vue';
import { addOutline, cardOutline } from 'ionicons/icons';
import { computed, defineComponent, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useConsumedStore } from '../store/consumed';

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonList,
    IonPage,
    IonTitle,
    IonToolbar,
    ConsumptionListItem,
    IonIcon,
    IonLabel,
    IonFooter,
    IonButtons,
    IonButton,
    IonFab,
    IonFabButton,
  },
  setup() {
    const { t, n } = useI18n();
    const consumedStore = useConsumedStore();
    const consumed = computed(() => consumedStore.consumed);
    const remove = (name: string, count?: number) => {
      consumedStore.removeConsumption(name, count);
    };
    return {
      t,
      n,
      consumed,
      remove,
      icons: {
        addOutline,
        cardOutline,
      },
    };
  },
  computed: {
    totalPrice() {
      const price = this.consumed.reduce((totalPrice: number, consumed) => totalPrice + consumed.count * consumed.singlePrice, 0);
      return price;
    },
    totalPriceFormatted() {
      return this.n(this.totalPrice, 'currency');
    },
  },
  methods: {},
});
</script>
<style lang="less" scoped>
.total-price {
  padding: 10px 20px;
  border-top: 1px grey solid;
  font-size: 18px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: var(--ion-background-color);
  .price {
    text-decoration-line: underline;
  text-decoration-style: double;
  }
}

.empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30%;
  justify-content: center;
  img {
    width: 40%;
  }
  h2 {
    text-align: center;
    font-weight: 400;
  }
}
</style>
