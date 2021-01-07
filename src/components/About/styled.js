import styled from "styled-components"
import media from "styled-media-query"

export const MainContent = styled.section`
  max-width: 70rem;
  margin: auto;
  padding: 2rem 5rem 5rem;

  ${media.lessThan("large")`
    padding: 2rem 0;
    max-width: 100%;
  `}

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.4rem auto 0;
    font-weight: 800;
    letter-spacing: 0.069rem;
    line-height: 1.4;
  }

  h1 {
    font-size: 2.8rem;

    ${media.lessThan("large")`
      font-size: 1.875rem;
    `}
  }
  h2 {
    font-size: 2.1rem;

    ${media.lessThan("large")`
      font-size: 1.375rem;
    `}
  }
  h3 {
    font-size: 1.6rem;

    ${media.lessThan("large")`
      font-size: 1.125rem;
    `}
  }

  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  iframe {
    color: var(--postColor);
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.7;
    letter-spacing: 0.069rem;
    padding: 0 1.4rem;

    ${media.lessThan("large")`
      padding: 0 1rem;
      word-break: break-word;
    `}
  }

  p {
    margin: 0 auto 1.6rem;
    word-wrap: break-word;
  }

  strong {
    font-weight: 700;
  }

  blockquote {
    color: var(--postColor);
    border-left: 0.4rem solid var(--highlight);
    margin: 3rem auto;
    padding: 0 1.875rem;
    font-size: 1.4rem;
  }

  a {
    border-bottom: 1px dashed var(--highlight);
    color: var(--highlight);
    text-decoration: none;
    transition: opacity 0.5s;

    svg {
      color: var(--postColor);
    }

    &:hover {
      opacity: 0.8;
    }
  }

  h1 {
    font-size: 4rem;
    font-weight: 700;
    margin: 1rem auto 0;
    padding: 0 1.4rem;

    ${media.lessThan("large")`
      font-size: 2.8rem;
      line-height: 1.1;
      padding: 0 1rem;
    `}
  }

  div h2,
  h2 {
    font-size: 2rem;
    font-weight: 700;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  li {
    border: 1px solid var(--highlight);
    border-radius: 7px;
    color: var(--highlight);
    margin: 1rem 1rem 0 0;
    padding: 0 1rem;
    font-size: 1rem;
    font-family: var(--fontInter);
  }
`

export const Image = styled.img`
  display: initial;
  width: 70%;
  border-bottom: 1px solid var(--texts);
  padding: 8px 8px 0;
  margin: 0 0 2rem 1rem;

  ${media.greaterThan("medium")`
    width: 300px;
    margin: 0 1.875rem 2rem;
  `}
`
