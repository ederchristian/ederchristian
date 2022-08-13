import styled from "styled-components"
import media from "styled-media-query"

export const LayoutWrapper = styled.section`
  display: flex;

  ${media.lessThan("large")`
    flex-direction: column;
  `}
`

export const LayoutMain = styled.main`
  background: var(--background);
  min-height: 100vh;
  max-width: 128rem;
  margin: 0 auto;
  padding-top: 8.6rem;
  width: 100%;

  ${media.lessThan("large")`
    padding: 6rem 0;
  `}

  body#grid & {
    grid-template-areas:
      "posts"
      "pagination";
  }
`
