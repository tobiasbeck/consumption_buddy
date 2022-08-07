export default {
  language: 'Deutsch',
  languageInt: 'German',
  localeFormat: 'de-DE',
  consumptionListItem: {
    removeOne: '1',
    removeAll: 'Alle löschen',
  },
  consumptionPage: {
    title: 'Bestellt',
    doAdd: 'Essen / Trinken Hinzufügen',
    doPay: 'Bezahlen',
    totalPrice: 'Gesamt',
    empty: 'Noch nichts eingetragen! Füge unten einen Eintrag hinzu!',
    warnNotAllPrices: 'Dein aktueller Gesamtbetrag könnte abweichen, da einige Preise unbekannt sind.',
  },
  addConsumptionPage: {
    title: 'Etwas hinzufügen',
    doAdd: 'Hinzufügen',
  },
  addConsumable: {
    title: 'Gericht eintragen',
    doAdd: 'Hinzufügen',
    doClose: 'Abbrechen',
    productName: 'Name',
    price: 'Preis (Optional)',
  },
  paymentPage: {
    title: 'Bezahlen',
    subtitle: 'Schön das du da warst!',
    thankyou: 'Danke!',
    description: 'Bitte denke daran beim Restaurant deine konsumierten Gerichte und Getränke zu bezahlen.',
    descriptionPayment: ' Wenn du hier alles ordentlich mitgetrackt hast sind das <strong>{price}</strong> ({priceWithTip} mit 10% Trinkgeld).',
    warnNotAllPrices: 'Dein aktueller Gesamtbetrag konnte nicht ermittelt werden, da einige Preise nicht bekannt sind.',
    doPay: 'Ich habe bezahlt',
  },
};

export const numberFormat = {
  currency: {
    style: 'currency',
    currency: 'EUR',
  },
};
