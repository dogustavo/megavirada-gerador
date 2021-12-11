import type { AppProps } from 'next/app'
import GlobalStyles from 'styles/global'

import { CookieProvider } from 'context/CookiesContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CookieProvider>
      <GlobalStyles />
      <main>
        <Component {...pageProps} />
      </main>
    </CookieProvider>
  )
}

export default MyApp
