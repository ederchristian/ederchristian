import styled from "styled-components"

export const CommentsWrapper = styled.section`
  max-width: 70rem;
  margin: auto;
  padding: 3rem 6.4rem 3rem;

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
`
