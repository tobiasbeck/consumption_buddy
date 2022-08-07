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
      <ion-label
        v-if="singlePrice !== undefined"
        slot="end"
      >
        {{ totalPrice }}
      </ion-label>
    </ion-item>
    <ion-item-options side="end">
      <ion-item-option
        :disabled="!(count > 1)"
        color="light"
        @click="emit('remove-one')"
      >
        <ion-icon
          slot="start"
          :icon="icons.removeCircleOutline"
        />
        <ion-label>{{ t('consumptionListItem.removeOne') }}</ion-label>
      </ion-item-option>
      <ion-item-option
        color="danger"
        @click="emit('remove-all')"
      >
        <ion-icon
          slot="start"
          :icon="icons.trashOutline"
        />
        <ion-label>{{ t('consumptionListItem.removeAll') }}</ion-label>
      </ion-item-option>
    </ion-item-options>
  </ion-item-sliding>
</template>

<script lang="ts">
import {
  IonIcon, IonItem, IonLabel, IonNote, IonItemSliding, IonItemOptions, IonItemOption,
} from '@ionic/vue';
import { trashOutline, removeCircleOutline } from 'ionicons/icons';
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
    IonIcon,
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
      default: undefined,
    },
  },
  setup(props, { emit }) {
    const { n, t } = useI18n();
    return {
      n,
      t,
      emit,
      icons: {
        trashOutline,
        removeCircleOutline,
      },
    };
  },
  computed: {
    totalPrice(): string {
      if (this.singlePrice === undefined) {
        return '';
      }
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
