import styled from "styled-components"
import media from "styled-media-query"

export const SocialLinksWrapper = styled.nav`
  ${media.lessThan("large")`
    order: 2;
    margin: 0 0 1rem;
    width: 100%;
  `}
`

export const SocialLinksList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;

  ${media.greaterThan("large")`
    border-right: 1px solid var(--borders);
    padding-right: 3.2rem;
  `}
`

export const SocialLinksItem = styled.li`
  ${media.greaterThan("large")`
    margin-left: 1.6rem;
  `}
`

export const SocialLinksLink = styled.a`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--highlight);
  }
`

export const IconWrapper = styled.div`
  fill: #fff;
  width: 32px;
  height: 32px;

  ${media.greaterThan("large")`
    width: 1.6rem;
    height: 1.6rem;
  `}
`
