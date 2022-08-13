import styled from "styled-components"
import media from "styled-media-query"

import AniLink from "gatsby-plugin-transition-link/AniLink"

export const MenuBarWrapper = styled.aside`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 3.75rem;
  height: 100vh;
  padding: 0.8rem 0;
  right: 0;
  transition: background 0.5s;

  ${media.lessThan("large")`
    position: fixed;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: auto;
    bottom: 0;
    padding: 0;
    background: var(--mediumBackground);
    border-top: 1px solid var(--borders);
    z-index: 9;
  `}
`

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;

  ${media.lessThan("large")`
    flex-direction: row;
  `}
`

export const MenuBarGroupMobile = styled.div`
  display: none;

  ${media.lessThan("large")`
    display: block;
  `}
`

export const MenuBarLink = styled(AniLink)`
  display: block;

  &.active {
    span {
      color: var(--highlight);
    }
  }
`

export const MenuBarItem = styled.span`
  display: block;
  color: var(--texts);
  cursor: pointer;
  height: 4.4rem;
  width: 4.4rem;
  padding: 1rem;
  position: relative;
  margin-right: 1.6rem;

  ${media.lessThan("large")`
    position: relative;
    width: 4rem;
    height: 4rem;
    padding: .9rem;
    margin: 0.8rem;
    margin-right: initial;
  `}

  ${media.greaterThan("large")`
    &:hover {
      color: var(--highlight);
    }
  `}

  &:hover {
    color: var(--highlight);
  }

  &.light {
    color: #d4d400;

    &:hover {
      color: #e2e240;
    }
  }

  &.display {
    ${media.lessThan("large")`
      display: none;
    `}
  }
`
