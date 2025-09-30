import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
  // Este típicamente corresponde al parámetro `[locale]`
  let locale = await requestLocale

  // Asegurar que el locale sea válido
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale
  }

  return {
    locale,
    messages: (await import(`../dictionaries/${locale}.json`)).default,
  }
})
