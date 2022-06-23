import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';

import { IonicVue } from '@ionic/vue';
import { createPinia } from 'pinia';
import './store/persistence';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

import messages from '@/langs';
import App from './App.vue';
import router from './router';

const lang = navigator.language.split('-')[0];

const i18n = createI18n({
  locale: lang,
  fallbackLocale: 'en',
  numberFormats: {
    de: {
      currency: {
        style: 'currency',
        currency: 'EUR',
      },
    },
    en: {
      currency: {
        style: 'currency',
        currency: 'EUR',
      },
    },
  },
  allowComposition: true, // you need to specify that!
  messages,
});

const pinia = createPinia();

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(i18n)
  .use(pinia);

router.isReady().then(() => {
  app.mount('#app');
});
