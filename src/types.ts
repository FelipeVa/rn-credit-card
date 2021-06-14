import { TextStyle, ViewStyle } from 'react-native'

export interface FormModel {
  holderName: string
  cardNumber: string
  expiration: string
  cvv: string
}

export enum CardFields {
  CardNumber,
  CardHolderName,
  Expiration,
  CVV,
  BillingAddress,
  BillingState,
  BillingCity,
  BillingZipCode,
}

export type TranslationsNonNull = {
  cardNumber: string
  cardHolderName: string
  nameSurname: string
  mmYY: string
  expiration: string
  securityCode: string
  billingAddress: string
  billingState: string
  billingCity: string
  billingZipCode: string
  next: string
  done: string
  cardNumberRequired: string
  cardNumberInvalid: string
  cardHolderNameRequired: string
  billingAddressRequired: string
  billingStateRequired: string
  billingCityRequired: string
  billingZipCodeRequired: string
  cityRequired: string
  stateRequired: string
  countryRequired: string
  zipCodeRequired: string
  cardHolderNameInvalid: string
  expirationRequired: string
  expirationInvalid: string
  securityCodeRequired: string
  securityCodeInvalid: string
  billingZipCodeInvalid: string
}
type Partial<T> = {
  [P in keyof T]?: T[P]
}
export type Translations = Partial<TranslationsNonNull>

type Style = ViewStyle | TextStyle
export type Overrides = {
  cardPreview?: Style
  labelText?: TextStyle
  cardHolderPreview?: TextStyle
  expirationPreview?: Style
  outline?: ViewStyle
  input?: ViewStyle
  button?: ViewStyle
  labelContainer?: ViewStyle
  inputLabel?: TextStyle
  errorText?: TextStyle
}

export type InputColors = {
  focused?: string
  errored?: string
  regular?: string
}

export type Fonts = {
  regular?: string
  bold?: string
}

export type LibraryProps = {
  LottieView?: any
  horizontalStart?: boolean
  formOnly?: boolean
  backgroundImage?: React.ReactNode
  translations?: Translations
  inputColors?: InputColors
  fonts?: Fonts
  overrides?: Overrides
}
