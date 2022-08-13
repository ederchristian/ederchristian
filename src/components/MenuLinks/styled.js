import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const MenuLinksWrapper = styled.nav`
  ${media.lessThan("large")`
    margin: auto;
  `}
`

export const MenuLinksList = styled.ul`
  font-size: 1rem;
  font-weight: 300;
  display: flex;

  ${media.lessThan("large")`
    font-size: 1.6rem;
    display: initial;
  `}

  ${media.greaterThan("large")`
    margin-left: 1.6rem;
  `}
`

export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;
  margin-left: 1.6rem;
  font-size: 1.6rem;

  ${media.lessThan("large")`
    padding: 1rem 0;
    margin-left: initial;
  `}

  .active {
    color: var(--highlight);
  }

  a {
    color: var(--texts);
    text-decoration: none;
    transition: all 0.5 ease;

    &:hover {
      color: var(--highlight);
    }
  }
`

export const MenuLinksLink = styled(AniLink)`
  font-family: var(--fontInter);
  font-weight: 500;
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--highlight);
  }
`
