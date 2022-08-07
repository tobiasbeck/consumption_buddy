<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button :text="t('consumptionPage.title')" />
        </ion-buttons>
        <ion-title>{{ t('paymentPage.title') }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">
            {{ t('paymentPage.title') }}
          </ion-title>
        </ion-toolbar>
      </ion-header>
      <div class="payment-container">
        <div :class="{'illustration-container': true, ok: payed }">
          <img
            class="illustration"
            src="../assets/payment.svg"
            alt="payment"
          >
          <div
            v-if="payed"
            class="ok-container"
          >
            <sweetalert-icon
              icon="success"
              color="#2fdf75"
            />
          </div>
        </div>
        <template v-if="!payed">
          <div><h1>{{ t('paymentPage.subtitle') }}</h1></div>
          <p>
            {{ t('paymentPage.description') }} <span
              v-if="!missingPrices"
              v-html="t('paymentPage.descriptionPayment', { price: totalPrice, priceWithTip: totalPriceWithTip })"
            />
          </p>

          <ion-card
            v-if="missingPrices"
            color="warning"
            class="missing-prices"
          >
            <ion-card-content>
              {{ t('paymentPage.warnNotAllPrices') }}
            </ion-card-content>
          </ion-card>
          <div style="width: 100%;">
            <ion-button
              expand="block"
              size="large"
              @click="doPay"
            >
              {{ t('paymentPage.doPay') }}
            </ion-button>
          </div>
        </template>
        <template v-else>
          <div><h1>{{ t('paymentPage.thankyou') }}</h1></div>
        </template>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  ref, computed, defineComponent, onMounted,
} from 'vue';
import {
  IonContent, IonHeader, IonFooter, IonButtons, IonBackButton, IonButton, IonLabel, IonList, IonIcon, IonPage, IonTitle, IonToolbar,
  IonCard, IonCardContent,
} from '@ionic/vue';
import { addOutline, cardOutline } from 'ionicons/icons';
import { useI18n } from 'vue-i18n';
import ConsumptionListItem from '@/components/ConsumptionListItem.vue';
import SweetalertIcon from '@/components/SweetalertIcon.vue';
import { useConsumedStore } from '../store/consumed';

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardContent,

    IonButtons,
    IonBackButton,
    SweetalertIcon,
  },
  setup() {
    const { t, n } = useI18n();
    const consumedStore = useConsumedStore();
    const payed = ref(false);
    const doPay = () => {
      payed.value = true;
      consumedStore.consumed = [];
    };
    const consumed = computed(() => consumedStore.consumed);
    return {
      t,
      n,
      consumed,
      payed,
      doPay,
      icons: {
        addOutline,
        cardOutline,
      },
    };
  },
  computed: {
    totalPrice() {
      const price = this.consumed.filter((c) => c.singlePrice !== undefined).reduce((totalPrice: number, consumed) => totalPrice + consumed.count * consumed.singlePrice, 0);
      return this.n(price, 'currency');
    },
    totalPriceWithTip() {
      const price = this.consumed.filter((c) => c.singlePrice !== undefined).reduce((totalPrice: number, consumed) => totalPrice + consumed.count * consumed.singlePrice, 0);
      return this.n(price * 1.1, 'currency');
    },
    missingPrices() {
      return this.consumed.find((c) => c.singlePrice === undefined) !== undefined;
    },
  },
  methods: {},
});
</script>
<style lang="less" scoped>
.payment-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;

  .missing-prices {
    width: 100%;
  }
  .illustration-container {
    display: flex;
    flex-direction: column;
    width: 80%;
    position: relative;
    img {
      transition: opacity 0.3s, filter 0.3s;
    }
    .ok-container {
      position: absolute;
      left: 0px;
      top: 0px;
      bottom: 0px;
      right: 0px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    &.ok {
      img {
        opacity: 0.5;
        filter: grayscale(1);
      }
    }
  }
  h1 {
    font-weight: 600;
    font-size:28px;
    margin: 0px;
  }
  p {
    line-height: 1.5em;
    text-align: justify;
  }
}
</style>
