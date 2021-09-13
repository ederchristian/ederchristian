import React from "react"
import propTypes from "prop-types"

import Profile from "../Profile"
import SocialLinks from "../SocialLinks"
import MenuLinks from "../MenuLinks"

import * as Styled from "./styled"

const Sidebar = ({ site: { title }, isMenuOpen, setIsMenuOpen }) => (
  <Styled.SidebarContainer isMenuOpen={isMenuOpen}>
    <Styled.SidebarContainerBox>
      <Profile title={title} isMobileHeader={false} />
      <Styled.SidebarLinksContainer>
        <SocialLinks />
        <MenuLinks setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      </Styled.SidebarLinksContainer>
    </Styled.SidebarContainerBox>
  </Styled.SidebarContainer>
)

Sidebar.propTypes = {
  site: propTypes.shape({
    title: propTypes.string.isRequired,
    position: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
  }),
}

export default Sidebar
