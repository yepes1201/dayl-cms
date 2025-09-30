import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

export default createMiddleware(routing)

export const config = {
  // Excluir rutas de Payload CMS, API, archivos estáticos y _next
  matcher: ['/((?!api|admin|_next|_vercel|.*\\..*).*)'],
}
