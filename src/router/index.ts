import { createRouter, createWebHistory } from '@ionic/vue-router';
import { createMemoryHistory, RouteRecordRaw } from 'vue-router';
import ConsumptionPage from '../views/ConsumptionPage.vue';
import AddConsumptionPage from '../views/AddConsumptionPage.vue';
import PaymentPage from '../views/PaymentPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'consumption:list',
    component: ConsumptionPage,
  },
  {
    name: 'consumption:add',
    path: '/home/add',
    component: AddConsumptionPage,
  },
  {
    name: 'consumption:pay',
    path: '/home/pay',
    component: PaymentPage,
  },
];

const router = createRouter({
  history: createMemoryHistory(process.env.BASE_URL),
  routes,
});

export default router;
