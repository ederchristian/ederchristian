import React from "react"
import ReactGA from "react-ga"

import links from "./content"

import getThemeColor from "../../utils/getThemeColor"

import * as Styled from "./styled"

const MenuLinks = ({ setIsMenuOpen, isMenuOpen }) => {
  const menuLinkClickTrack = link => {
    setIsMenuOpen(!isMenuOpen)

    ReactGA.event({
      category: "menu link",
      action: "click",
      label: `Menu Link - ${link}`,
    })
  }

  return (
    <Styled.MenuLinksWrapper>
      <Styled.MenuLinksList>
        {links.map((link, i) => (
          <Styled.MenuLinksItem key={i}>
            <Styled.MenuLinksLink
              to={link.url}
              cover
              direction="left"
              bg={getThemeColor()}
              duration={0.5}
              onClick={() => menuLinkClickTrack(link.label)}
              activeClassName="active"
            >
              {link.label}
            </Styled.MenuLinksLink>
          </Styled.MenuLinksItem>
        ))}
      </Styled.MenuLinksList>
    </Styled.MenuLinksWrapper>
  )
}

export default MenuLinks
