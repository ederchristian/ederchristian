import React from "react"
import propTypes from "prop-types"

import Profile from "../Profile"
import SocialLinks from "../SocialLinks"
import MenuLinks from "../MenuLinks"

import * as Styled from "./styled"

const Sidebar = ({
  site: { title, position, description },
  isMenuOpen,
  setIsMenuOpen,
}) => (
  <Styled.SidebarContainer isMenuOpen={isMenuOpen}>
    <Profile
      title={title}
      position={position}
      description={description}
      isMobileHeader={false}
    />
    <Styled.SidebarLinksContainer>
      <SocialLinks />
      <MenuLinks setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
    </Styled.SidebarLinksContainer>
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
