import React from "react"
import PropTypes from "prop-types"

import Logo from "../../assets/logo-eder-christian.svg"

import getThemeColor from "../../utils/getThemeColor"

import * as Styled from "./styled"

const Profile = ({ title, position, description, isMobileHeader }) => {
  return (
    <Styled.ProfileWrapper isMobileHeader={isMobileHeader}>
      <Styled.ProfileLink
        to="/"
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.5}
      >
        <Logo style={{ width: 200 }} />
        <Styled.ProfilePosition>{position}</Styled.ProfilePosition>
      </Styled.ProfileLink>
      <Styled.ProfileDescription>{description}</Styled.ProfileDescription>
    </Styled.ProfileWrapper>
  )
}

Profile.propTypes = {
  title: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Profile
