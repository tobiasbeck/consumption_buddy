<template>
  <ion-card
    class="new-card"
    :button="true"
    style="margin: 16px;"
  >
    <div class="icon-container">
      <ion-icon :icon="icons.addOutline" />
    </div>
  </ion-card>
</template>

<script lang="ts">
import { IonCard } from '@ionic/vue';
import { addOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'ConsumableCard',
  components: {
    IonCard,
  },
  props: {
  },
  setup() {
    return {
      icons: {
        addOutline,
      },
    };
  },
});
</script>

<style lang="less" scoped>
.new-card {
  width: 100%;
  font-size: 48px;
  display: flex;
  border: 2px var(--ion-color-medium) dashed;
  box-shadow: none;
  .icon-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
}
</style>
