export default {
  language: 'English',
  languageInt: 'German',
  localeFormat: 'en-US',
  consumptionListItem: {
    removeOne: 'Remove one',
    removeAll: 'Delete',
  },
  consumptionPage: {
    title: 'Ordered',
    doAdd: 'Add Food / Drink',
    doPay: 'Pay',
    totalPrice: 'Total',
    empty: 'Nothing added yet. Add something by clicking the button below',
    warnNotAllPrices: 'Your current total may be incorrect, because some prices are unknown.',
  },
  addConsumptionPage: {
    title: 'Add Food / Drink',
    doAdd: 'Add',
  },
  addConsumable: {
    title: 'Add Food / Drink',
    doAdd: 'Add',
    doClose: 'Cancel',
    productName: 'Name',
    price: 'Price (Optional)',
  },
  paymentPage: {
    title: 'Pay',
    subtitle: 'Thank you for your visit!',
    thankyou: 'Thank You!',
    description: 'Please remember to pay your food and drinks at the restaurant.',
    descriptionPayment: ' If you have entered everything correctly you have ordered, the total is <strong>{price}</strong> ({priceWithTip} with 10% tip).',
    warnNotAllPrices: 'Your current total could not be calculated, because some prices are unknown.',
    doPay: 'Ich habe bezahlt',
  },
};

export const numberFormat = {
  currency: {
    style: 'currency',
    currency: 'EUR',
  },
};
