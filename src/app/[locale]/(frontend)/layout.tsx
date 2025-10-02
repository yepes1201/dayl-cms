import React from 'react'
import './styles.css'
import { getTranslations } from 'next-intl/server'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export async function generateMetadata() {
  const t = await getTranslations('metadata')

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function FrontendLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  )
}
