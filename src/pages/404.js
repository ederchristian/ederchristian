import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"

import * as Styled from "../components/About/styled"

const NotFoundPage = () => (
  <Layout>
    <Seo title="Page not found" />
    <Styled.MainContent>
      <h1>Page not found</h1>
      <p>Sorry, the page you were looking for could not be found.</p>
    </Styled.MainContent>
  </Layout>
)

export default NotFoundPage
