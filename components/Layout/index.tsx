import React, { FunctionComponent } from 'react'

import Header from './components/Header'

const Layout: FunctionComponent = ({ children }) => (
  <>
    <Header />
    {children}
  </>
)

export default Layout