import React from 'react'
import './styles.css'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata() {
  const t = await getTranslations('metadata')

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function FrontendLayout({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>
}
