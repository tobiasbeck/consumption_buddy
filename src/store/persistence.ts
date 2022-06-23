import { Storage } from '@ionic/storage';

// eslint-disable-next-line import/prefer-default-export
export async function initPersistence() {
  const persistentStore = new Storage();
  await persistentStore.create();
  return persistentStore;
}
