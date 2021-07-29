import 'styles/globalStyles.scss'

import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app'
import Head from 'next/head'

import Layout from 'components/Layout'
import { theme } from 'utils/theme'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>FakeWP</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      </Head>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default App
