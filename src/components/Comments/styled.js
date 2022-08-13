import styled from "styled-components"
import media from "styled-media-query"

export const CommentsWrapper = styled.section`
  max-width: 90rem;
  margin: auto;
  padding: 3rem 6.4rem 3rem;

  ${media.lessThan("large")`
    max-width: 100%;
    padding: 3rem 1.4rem 0;
  `}

  iframe[src*="ads-iframe"] {
    display: none;
  }

  #disqus_thread {
    a {
      color: var(--highlight) !important;
    }
  }
`

export const CommentsTitle = styled.h2`
  color: var(--texts);
  font-size: 2.1rem;
  font-weight: 700;
  padding-bottom: 2rem;

  ${media.lessThan("large")`
    font-size: 1.375rem;
  `}
`
