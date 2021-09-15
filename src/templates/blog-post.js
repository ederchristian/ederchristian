import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import RecommendedPosts from "../components/RecommendedPosts"
import Comments from "../components/Comments"

import * as Styled from "../components/Post/styled"

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const next = pageContext.nextPost
  const previous = pageContext.previousPost

  return (
    <Layout>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
      />
      <Styled.PostHeader>
        <Styled.PostDate>
          {post.frontmatter.date} • {post.timeToRead} min to read
        </Styled.PostDate>
        <Styled.PostTitle>{post.frontmatter.title}</Styled.PostTitle>
        <Styled.PostDescription>
          {post.frontmatter.description}
        </Styled.PostDescription>
      </Styled.PostHeader>
      <Styled.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </Styled.MainContent>
      <RecommendedPosts previous={previous} next={next} />
      <Comments url={post.fields.slug} title={post.frontmatter.title} />
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(locale: "en-us", formatString: "MMMM DD[,] YYYY")
        image
      }
      html
      timeToRead
    }
  }
`

export default BlogPost
