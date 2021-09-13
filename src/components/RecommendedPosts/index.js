import React from "react"
import propTypes from "prop-types"
import * as Styled from "./styled"

const RecommendedPosts = ({ next, previous }) => (
  <Styled.RecommendedWrapper>
    {previous && (
      <Styled.RecommendedLink
        to={previous.fields.slug}
        className="previous"
        cover
        direction="left"
        bg="#0e1218"
        duration={0.5}
      >
        {previous.frontmatter.title}
      </Styled.RecommendedLink>
    )}
    {next && (
      <Styled.RecommendedLink
        to={next.fields.slug}
        className="next"
        cover
        direction="right"
        bg="#0e1218"
        duration={0.5}
      >
        {next.frontmatter.title}
      </Styled.RecommendedLink>
    )}
  </Styled.RecommendedWrapper>
)

RecommendedPosts.propTypes = {
  next: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
  previous: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
}

export default RecommendedPosts
