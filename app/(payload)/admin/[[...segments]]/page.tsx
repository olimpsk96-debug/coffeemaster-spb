import { RootPage, generatePageMetadata } from '@payloadcms/next/views'
import { importMap } from '../importMap'
import type { Metadata } from 'next'
import config from '@payload-config'

export const dynamic = 'force-dynamic'

type Args = {
  params: Promise<{ segments: string[] }>
  searchParams: Promise<{ [key: string]: string | string[] }>
}

export async function generateMetadata({ params, searchParams }: Args): Promise<Metadata> {
  const resolvedParams = await params
  return generatePageMetadata({
    config,
    params: Promise.resolve(resolvedParams as unknown as { [key: string]: string | string[] }),
    searchParams,
  })
}

export default function Page({ params, searchParams }: Args) {
  return RootPage({
    config,
    importMap,
    params: params as unknown as Promise<{ segments: string[] }>,
    searchParams,
  })
}
