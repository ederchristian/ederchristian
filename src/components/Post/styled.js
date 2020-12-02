import styled from "styled-components"

export const PostHeader = styled.header`
  max-width: 70rem;
  margin: auto;
  padding: 5rem 5rem 0;
  color: var(--postColor);
`

export const PostTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin: 1rem auto;
  padding: 0 1.4rem;
`

export const PostDescription = styled.h2`
  font-size: 2rem;
  font-weight: 200;
  padding: 0 1.4rem;
`

export const PostDate = styled.p`
  font-size: 1.1rem;
  font-weight: 100;
  padding: 0 1.4rem;
`

export const MainContent = styled.section`
  max-width: 70rem;
  margin: auto;
  padding: 2rem 5rem;

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.4rem auto 1rem;
    font-weight: 800;
    letter-spacing: 0.069rem;
    line-height: 1.4;
  }

  h1 {
    font-size: 2.8rem;
  }
  h2 {
    font-size: 2.1rem;
  }
  h3 {
    font-size: 1.6rem;
  }
  h4 {
    font-size: 1.4rem;
  }
  h5 {
    font-size: 1.2rem;
  }

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
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.7;
    letter-spacing: 0.069rem;
    padding: 0 1.4rem;
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
    padding: 0.625rem 0;

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

  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;
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
  }
`
