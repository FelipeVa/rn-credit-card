export function isValidZipCode(zipCode: number | string): boolean {
  const regex = /(^\d{5}$)|(^\d{5}-\d{4}$)/

  return regex.test(String(zipCode))
}
