import React from "react"
import PropTypes from "prop-types"
import ReactDisqusComments from "react-disqus-comments"

import * as Styled from "./styled"

const Comments = ({ url, title }) => {
  const completeURL = `https://ederchristian.com${url}`

  return (
    <Styled.CommentsWrapper>
      <Styled.CommentsTitle>Comments:</Styled.CommentsTitle>
      <ReactDisqusComments
        shortname="ederchristian"
        identifier={completeURL}
        title={title}
        url={completeURL}
      />
    </Styled.CommentsWrapper>
  )
}

Comments.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Comments
