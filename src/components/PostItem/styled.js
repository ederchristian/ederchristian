import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const PostItemWrapper = styled.section`
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding: 2rem 3rem;

  ${media.lessThan("large")`
    align-items: flex-start;
    flex-direction: column;
    padding: 1.6rem;
  `}

  ${media.greaterThan("large")`
    margin: 0 2rem;
  `}

  body#grid & {
    flex-direction: column;
    justify-content: center;
    padding: 2rem 1rem;
    border: none;
  }
`

export const PostItemLink = styled(AniLink)`
  display: flex;
  color: var(--texts);
  text-decoration: none;
  font-family: var(--fontInter);

  ${media.lessThan("large")`
    min-width: auto;
    min-height: auto;
    font-size: 1rem;
    border-radius: 0;
  `}

  body#grid & {
    background-color: var(--background);
  }
`

export const PostItemTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props =>
    props.background ? props.background : "var(--highlight)"};
  border-radius: 0.7rem;
  margin-left: 1.5rem;
  color: #fff;
  font-size: 1.8rem;
  font-weight: 700;
  min-width: 9rem;
  min-height: 9rem;

  ${media.lessThan("large")`
    min-width: initial;
    min-height: 24px;
    margin: 0 0 1.2rem;
    padding: 0 1.6rem;
    border-radius: 0.7rem;
    font-size: 1.4rem;
  `}

  body#grid & {
    margin-bottom: 1.5rem;
  }
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 1.6rem;
  transition: color 0.5s;
  height: 100%;

  ${media.lessThan("large")`
    margin: 0;
  `}

  &:hover {
    color: var(--postColor);
  }
`

export const PostItemDate = styled.time`
  font-size: 1.2rem;
`

export const PostItemTitle = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  padding: 0.4rem 0;

  body#grid & {
    margin: 0.8rem 0;
    line-height: 1.1;
  }

  ${media.greaterThan("large")`
    padding: initial;
    max-width: 68rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
`

export const PostItemDescription = styled.p`
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 1.2;
  max-width: 28rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${media.greaterThan("large")`
    max-width: 50rem;
  `}
`
