import React from "react"
import styled from "styled-components"
import media from "styled-media-query"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const MainContent = styled.section`
  100rem
  margin: auto;
  padding: 2rem 5rem 5rem;
  color: var(--postColor);
  font-family: var(--fontInter);

  ${media.lessThan("large")`
    padding: 2rem 0;
    max-width: 100%;
  `}
`

const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: 700;
  padding: 0 1.4rem;
  margin: 0 auto 1.6rem;
  font-weight: 800;
  word-wrap: break-word;
  
  ${media.lessThan("large")`
    font-size: 2.4rem;
  `}
`

const Paragraph = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
  padding: 0 1.6rem;
  margin: 0 auto 1.6rem;
  word-wrap: break-word;
  line-height: 1.8;
`

const NotFoundPage = () => (
  <Layout>
    <Seo title="Page not found" />
    <MainContent>
      <Title>Page not found</Title>
      <Paragraph>Sorry, the page you were looking for could not be found.</Paragraph>
    </MainContent>
  </Layout>
)

export default NotFoundPage
