import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { AnimatePresence } from 'framer-motion'

import { GlobalStyle } from '../styles/globals'
import theme from '../styles/themes/default'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <ThemeProvider {...{theme}}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </AnimatePresence>
  )
}

export default MyApp
