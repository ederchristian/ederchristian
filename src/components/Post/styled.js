import styled from "styled-components"
import media from "styled-media-query"

export const PostHeader = styled.header`
  100rem
  margin: 0 auto 3.2rem;
  padding: 2rem 5rem 0;
  color: var(--postColor);

  ${media.lessThan("large")`
    padding: 1.6rem 0 0;
    max-width: 100%;
  `}
`

export const PostTitle = styled.h1`
  font-size: 4.2rem;
  font-weight: 700;
  margin: 1rem auto;
  padding: 0 1.4rem;

  ${media.lessThan("large")`
    font-size: 3.4rem;
    padding: 0 1.6rem;
  `}
`

export const PostDescription = styled.h2`
  font-size: 2rem;
  font-weight: 200;
  padding: 0 1.4rem;

  ${media.lessThan("large")`
    line-height: 1.3;
    font-size: 1.8rem;
    padding: 0 1.6rem;
  `}
`

export const PostDate = styled.p`
  font-size: 1.4rem;
  font-weight: 100;
  padding: 0 1.4rem;

  ${media.lessThan("large")`
    padding: 0 1.6rem;
    font-size: 1.2rem;
  `}
`

export const MainContent = styled.section`
  max-width: 88rem;
  margin: 0 auto;
  padding: 2rem 5rem;

  ${media.lessThan("large")`
    padding: 2rem 0;
    margin: auto;
    max-width: 100%;
  `}

  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
    color: var(--postColor);
    font-size: 1.8rem;
    font-weight: 300;
    line-height: 1.8;
    word-break: break-word;

    ${media.lessThan("large")`
      padding: 0 1.6rem;
    `}
  }

  p {
    margin: 0 auto 1.6rem;
  }

  ul,
  ol {
    list-style: disc;
    margin: 0 auto 1.6rem;
    padding-left: 2.5rem;
  }

  li {
    padding: 0.4rem 0;

    & > ul {
      margin-bottom: 0;
    }
  }

  p,
  li {
    code {
      word-wrap: break-word;
    }
  }

  strong {
    font-weight: 700;
  }

  blockquote {
    color: var(--postColor);
    border-left: 0.4rem solid var(--highlight);
    margin: 3rem auto;
    padding: 0 1.875rem;

    ${media.lessThan("large")`
      padding: 0 1.6rem;
    `}
  }

  hr {
    border: 1px solid var(--borders);
    margin: 3rem auto;
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

  img {
    display: block;
    max-width: 100%;
    margin: 1.875rem auto;
  }

  .gatsby-resp-image-wrapper span,
  .gatsby-resp-image-wrapper img {
    border-radius: 0.7rem;
  }

  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;

    ${media.lessThan("large")`
      padding: 0 1.6rem;
    `}
  }

  #twitter-widget-0,
  .instagram-media,
  .twitter-tweet {
    margin: 20px auto !important;
  }

  .instagram-media {
    margin: 1rem auto !important;
  }

  .gatsby-resp-image-background-image {
    z-index: 2;
    opacity: 1 !important;
  }

  .gatsby-resp-image-image {
    box-shadow: none !important;
    transition: opacity 0.2s;

    &.lazyload {
      opacity: 0;
    }

    &.lazyloaded {
      opacity: 1;
      z-index: 3;
    }
  }

  .gatsby-highlight {
    padding: 0 1.6rem 1.6rem;

    ${media.lessThan("large")`
      padding: 0;
    `}
  }

  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin: 1rem auto;
    padding: 0 1.4rem;

    ${media.lessThan("large")`
      font-size: 2.4rem;
      line-height: 1.1;
      padding: 0 1.6rem;
    `}
  }

  div h2,
  h2 {
    font-size: 2.8rem;
    font-weight: 700;
    padding-top: 1.6rem;
  }

  .subtitle {
    text-align: center;
    font-size: 0.8rem;
    font-family: var(--fontInter);
  }

  .videoYouTubePost {
    width: 100%;
    height: 14rem;

    ${media.greaterThan("medium")`
      height: 26rem;
    `}

    ${media.greaterThan("large")`
      height: 29rem;
    `}

    ${media.greaterThan("huge")`
      height: 34rem;
    `}
  }
`
