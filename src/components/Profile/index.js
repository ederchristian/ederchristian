import React from "react"
import PropTypes from "prop-types"

import Logo from "../../assets/logo-eder-christian.svg"

import getThemeColor from '../../utils/getThemeColor'

import * as S from './styled'

const Profile = ({ title, position, description, isMobileHeader }) => {
  return (
    <S.ProfileWrapper isMobileHeader={isMobileHeader}>
      <S.ProfileLink
        to="/"
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.5}
      >
        <Logo style={{ width: 200 }} />
        <S.ProfilePosition>{position}</S.ProfilePosition>
      </S.ProfileLink>
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

Profile.propTypes = {
  title: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
}

export default Profile
