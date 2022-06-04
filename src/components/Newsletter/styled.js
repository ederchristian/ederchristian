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

    ${media.lessThan("large")`
      padding: 0 1rem;
      font-size: 0.8rem;
    `}
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
    font-size: 3.6rem;
    font-weight: 700;
    margin: 1rem auto 0;
    padding: 0 1.4rem;

    ${media.lessThan("large")`
      font-size: 2.4rem;
      line-height: 1.1;
      padding: 0 1rem;
      margin: 1rem auto 2rem;
    `}
  }

  div h2,
  h2 {
    font-size: 1.6rem;
    font-weight: 700;
  }
`

export const Group = styled.div`
  margin: 0 1rem;

  ${media.greaterThan("medium")`
    margin: 0 0 0 1.4rem;
    width: 500px;
  `}
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export const Input = styled.input`
  width: 100%;
  height: 46px;
  border-radius: 10px;
  background: transparent;
  border: 1px solid var(--borders);
  color: var(--texts);

  &:not([type="submit"]) {
    padding-left: 16px;
    font-size: 1rem;

    &:focus {
      border-color: rgba(0, 213, 159, 0.8);
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset,
        0 0 0.8rem rgba(0, 213, 159, 0.6);
      outline: 0 none;
    }
  }

  ${media.greaterThan("medium")`
    width: 500px;
  `}

  &[type=submit] {
    margin-top: 16px;
    background: var(--highlight);
    border: 1px solid var(--highlight);
    font-size: 1.2rem;
    font-weight: 700;
    font-family: var(--fontInter);
    text-transform: uppercase;
    transition: all 0.5s ease;

    &:hover {
      cursor: pointer;
      background: transparent;
      color: var(--highlight);
    }
  }
`
