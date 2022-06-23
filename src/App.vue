<template>
  <ion-app>
    <ion-router-outlet ref="contentRouter" />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent, provide, ref } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
  },
  setup() {
    const contentRouter = ref(null);
    provide('modal-parent', contentRouter);
    return {
      contentRouter,
    };
  },
});
</script>
