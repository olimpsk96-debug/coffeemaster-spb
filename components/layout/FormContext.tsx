'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { DiagnosticsForm } from '@/components/forms/DiagnosticsForm'

interface FormContextValue {
  open: () => void
  close: () => void
  isOpen: boolean
}

const FormContext = createContext<FormContextValue | null>(null)

export function FormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <FormContext.Provider value={{ isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }}>
      {children}
      <DiagnosticsForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </FormContext.Provider>
  )
}

export function useFormModal() {
  const ctx = useContext(FormContext)
  if (!ctx) throw new Error('useFormModal must be used inside FormProvider')
  return ctx
}
