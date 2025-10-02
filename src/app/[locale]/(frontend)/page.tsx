import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { MoveRight } from 'lucide-react'
import { fileURLToPath } from 'url'
import { getTranslations } from 'next-intl/server'

import config from '@/payload.config'
import './styles.css'
import { Button } from '@/components/ui/button'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })
  const t = await getTranslations('home')

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <>
      <section id="hero" className="p-4">
        <h1 className="text-8xl font-normal">Daniel Yepes</h1>
        <h2 className="text-4xl font-normal">Software Engineer</h2>
        <p className="text-lg font-normal">
          I'm a software engineer with a passion for building web applications that are both
          functional and aesthetically pleasing.
        </p>
        <Button>Contact me</Button>
      </section>
      <section id="about-me" className="rounded-t-4xl px-4 py-[56px] flex flex-col gap-6">
        <p className="max-w-[600px] text-xl font-normal">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Primis cursus ornare scelerisque
          libero aenean dignissim diam. Nec maecenas ridiculus duis varius pharetra, quam montes
          sagittis.
        </p>
        <Button icon={<MoveRight className=" w-5 h-5" />}>Acerca de mi</Button>
      </section>
    </>
  )
}
