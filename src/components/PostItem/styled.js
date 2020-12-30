import styled from 'styled-components'
import media from 'styled-media-query'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const PostItemWrapper = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 2rem 3rem;

  &:(not:last-child) {
    border-bottom: 1px solid var(--borders);
  }

  ${media.lessThan("large")`
    align-items: flex-start;
    flex-direction: column;
    padding: 2rem 1rem;
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

  ${media.lessThan("large")`
    min-width: auto;
    min-height: auto;
    margin-bottom: .7rem;
    padding: .2rem .5rem;
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
  background: ${props => props.background ? props.background : 'var(--highlight)'};
  border-radius: 50%;
  color: #fff;
  font-family: 'Inter', sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  min-width: 90px;
  min-height: 90px;

  ${media.lessThan("large")`
    min-width: initial;
    min-height: 24px;
    margin-bottom: 12px;
    padding: 0 16px;
    border-radius: 7px;
    font-size: 0.8rem;
  `}

  body#grid & {
    margin-bottom: 1.5rem;
  }
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
  transition: color 0.5s;

  ${media.lessThan("large")`
    margin: 0;
  `}

  &:hover {
    color: var(--postColor);
  }
`

export const PostItemDate = styled.time`
  font-size: 0.9rem;
`

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;

  body#grid & {
    margin: 0.8rem 0;
    line-height: 1.1;
  }
`

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`
