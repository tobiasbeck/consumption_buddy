<template>
  <ion-item-sliding>
    <ion-item class="list-item">
      <div slot="start">
        {{ count }}x
      </div>
      <ion-label class="ion-text-wrap">
        <h2>
          {{ name }}
        </h2>
      </ion-label>
      <ion-label slot="end">
        {{ totalPrice }}
      </ion-label>
    </ion-item>
    <ion-item-options side="end">
      <ion-item-option
        color="danger"
        @click="emit('remove-all')"
      >
        {{ t('consumptionListItem.removeAll') }}
      </ion-item-option>
      <ion-item-option
        v-if="count > 1"
        @click="emit('remove-one')"
      >
        {{ t('consumptionListItem.removeOne') }}
      </ion-item-option>
    </ion-item-options>
  </ion-item-sliding>
</template>

<script lang="ts">
import {
  IonIcon, IonItem, IonLabel, IonNote, IonItemSliding, IonItemOptions, IonItemOption,
} from '@ionic/vue';
import { chevronForward } from 'ionicons/icons';
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'ConsumptionListItem',
  components: {
    IonItem,
    IonLabel,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
  },
  props: {
    count: {
      type: Number,
      default: 1,
    },
    name: {
      type: String,
      default: '',
    },
    singlePrice: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { emit }) {
    const { n, t } = useI18n();
    return {
      n,
      t,
      emit,
    };
  },
  data() {
    return { chevronForward };
  },
  computed: {
    totalPrice(): string {
      return this.n(this.count * this.singlePrice, 'currency');
    },
  },
  methods: {
    isIos: () => {
      const win = window as any;
      return win && win.Ionic && win.Ionic.mode === 'ios';
    },
  },
});
</script>

<style scoped>
.list-item  h2 {
  font-weight: 600;
  margin: 0;
}
</style>
