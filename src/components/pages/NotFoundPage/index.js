import React from 'react'

import {
  PageTemplate, Header, Footer, Heading,
} from '../../index'

const NotFoundPage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Heading>404 Not Found</Heading>
    </PageTemplate>
  )
}

export default NotFoundPage
