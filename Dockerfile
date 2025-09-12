# ---------------------
# 1. Etapa de build
# ---------------------
  FROM node:20-alpine AS builder

  # Directorio de trabajo
  WORKDIR /app

  # Variables de entorno en tiempo de build
  ARG DATABASE_URI
  ARG CRON_SECRET
  ARG PREVIEW_SECRET
  ARG NEXT_PUBLIC_SERVER_URL
  ARG PAYLOAD_SECRET
  
  # Copiar package.json y lockfile
  COPY package.json pnpm-lock.yaml* ./
  
  # Instalar dependencias
  RUN corepack enable && corepack prepare pnpm@latest --activate && pnpm install --frozen-lockfile
  
  # Copiar el resto del código
  COPY . .
  
  ENV DATABASE_URI=${DATABASE_URI}
  ENV CRON_SECRET=${CRON_SECRET}
  ENV PREVIEW_SECRET=${PREVIEW_SECRET}
  ENV NEXT_PUBLIC_SERVER_URL=${NEXT_PUBLIC_SERVER_URL}
  ENV PAYLOAD_SECRET=${PAYLOAD_SECRET}
  
  # Construir la app
  RUN pnpm build
  
  # ---------------------
  # 2. Etapa de producción
  # ---------------------
  FROM node:20-alpine AS runner
  
  WORKDIR /app
  
  # Establecer NODE_ENV en producción
  ENV NODE_ENV=production
  
  # No pedir telemetría a Next.js
  ENV NEXT_TELEMETRY_DISABLED=1
  
  # Instalar solo dependencias necesarias para producción
  COPY package.json pnpm-lock.yaml* ./
  RUN corepack enable && corepack prepare pnpm@latest --activate && pnpm install --frozen-lockfile --prod
  
  # Copiar archivos compilados de la etapa de build
  COPY --from=builder /app/.next ./.next
  COPY --from=builder /app/package.json ./
  COPY --from=builder /app/tsconfig.json ./
  
  # Puerto de Next.js
  EXPOSE 3000
  
  # Comando de inicio
  CMD ["pnpm", "start"]
  