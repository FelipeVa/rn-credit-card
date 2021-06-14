import { Translations, TranslationsNonNull } from '../types'

export function getTranslations(
  translations: Translations = {},
): TranslationsNonNull {
  return <TranslationsNonNull>{
    cardNumber: 'Card Number',
    cardHolderName: 'Cardholder Name',
    nameSurname: 'Name Surname',
    mmYY: 'MM/YY',
    expiration: 'Expiration',
    securityCode: 'Security Code',
    billingAddress: 'Billing Address',
    billingState: 'State',
    billingCity: 'City',
    billingZipCode: 'Zip Code',
    next: 'Next',
    done: 'Done',
    cardNumberRequired: 'Card number is required.',
    cardNumberInvalid: 'This card number looks invalid.',
    cardHolderNameRequired: 'Cardholder name is required.',
    billingAddressRequired: 'Billing address is required.',
    billingStateRequired: 'Billing state is required.',
    billingCityRequired: 'Billing city is required.',
    billingZipCodeRequired: 'Billing zip code is required.',
    cityRequired: 'City is required.',
    stateRequired: 'State is required.',
    countryRequired: 'Country is required.',
    zipCodeRequired: 'Zip Code is required.',
    cardHolderNameInvalid: 'This cardholder name looks invalid.',
    expirationRequired: 'Expiration date is required.',
    expirationInvalid: 'This expiration date looks invalid.',
    securityCodeRequired: 'Security code is required.',
    securityCodeInvalid: 'This security date looks invalid.',
    billingZipCodeInvalid: 'This zip code looks invalid.',
    ...translations,
  }
}
