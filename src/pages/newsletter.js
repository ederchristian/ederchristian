import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"

import * as Styled from "../components/About/styled"

const About = () => (
  <Layout>
    <Seo title="Newsletter" />
    <Styled.MainContent>
      <Styled.CenteredContainer>
        <iframe src="https://ederchristian.substack.com/embed" width="480" height="320"  frameborder="0" scrolling="no"></iframe>
      </Styled.CenteredContainer>
    </Styled.MainContent>
  </Layout>
)

export default About
