<template>
  <ion-card
    class="consumable-card"
    :button="true"
    style="margin: 16px;"
  >
    <ion-card-header>
      <ion-card-title class="ellipsis">
        {{ name }}
      </ion-card-title>
      <ion-card-subtitle>
        {{ n(singlePrice, 'currency') }}
      </ion-card-subtitle>
    </ion-card-header>
  </ion-card>
</template>

<script lang="ts">
import {
  IonCard, IonCardTitle, IonCardSubtitle, IonCardHeader,
} from '@ionic/vue';
import { chevronForward } from 'ionicons/icons';
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'ConsumableCard',
  components: {
    IonCard,
    IonCardTitle,
    IonCardHeader,
    IonCardSubtitle,
  },
  props: {
    name: {
      type: String,
      default: '',
    },
    singlePrice: {
      type: Number,
      default: 0,
    },
  },
  setup() {
    const { n } = useI18n();
    return {
      n,
    };
  },
  data() {
    return { chevronForward };
  },
  methods: {
    isIos: () => {
      const win = window as any;
      return win && win.Ionic && win.Ionic.mode === 'ios';
    },
  },
});
</script>

<style lang="less" scoped>
.consumable-card {
  width: 100%;
  .ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
  }
}
</style>
