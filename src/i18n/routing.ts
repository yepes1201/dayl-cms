import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'

export const routing = defineRouting({
  // Lista de todos los locales soportados
  locales: ['en', 'es'],

  // Locale por defecto
  defaultLocale: 'en',

  // Prefijo de locale en URLs
  localePrefix: 'always', // o 'as-needed' para omitir el default locale
})

// Exportar funciones de navegación tipadas
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing)
