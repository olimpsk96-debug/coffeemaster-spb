'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FloatingCTA } from '@/components/shared/FloatingCTA'
import { FormProvider, useFormModal } from '@/components/layout/FormContext'
import { LocalBusinessJsonLd } from '@/components/shared/JsonLd'

function FloatingCTAWithForm() {
  const { open } = useFormModal()
  return <FloatingCTA onOpenForm={open} />
}

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <FormProvider>
      <LocalBusinessJsonLd />
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingCTAWithForm />
    </FormProvider>
  )
}
