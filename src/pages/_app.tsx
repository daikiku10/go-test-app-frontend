import { queryClient } from '@/lib/react-query'
import '@/styles/globals.css'
import { QueryClientProvider, Hydrate } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [queryClientTest] = useState(queryClient)
  return (
    <QueryClientProvider client={queryClientTest}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  )
}
