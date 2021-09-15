import React from "react"
import PropTypes from "prop-types"

import Logo from "../../assets/logo-eder-christian.svg"

import getThemeColor from "../../utils/getThemeColor"

import * as Styled from "./styled"

const Profile = ({ position, description, isMobileHeader }) => {
  return (
    <Styled.ProfileWrapper isMobileHeader={isMobileHeader}>
      <Styled.ProfileLink
        to="/"
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.5}
      >
        <Logo style={{ width: 150, height: 25 }} />
        <Styled.ProfilePosition>{position}</Styled.ProfilePosition>
      </Styled.ProfileLink>
      <Styled.ProfileDescription>{description}</Styled.ProfileDescription>
    </Styled.ProfileWrapper>
  )
}

Profile.propTypes = {
  title: PropTypes.string.isRequired,
  position: PropTypes.string,
  description: PropTypes.string,
}

export default Profile
