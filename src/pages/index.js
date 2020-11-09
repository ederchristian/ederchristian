import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import PostItem from '../components/PostItem'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem
      slug="/about/"
      background="#00d59f"
      category="Misc"
      date="30 de julho de 2020"
      timeToRead="5"
      title="Um título maneiro aqui"
      description="Uma description da hora aqui"
    />
  </Layout>
)

export default IndexPage
