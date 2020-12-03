import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Logo from "../../assets/logo-eder-christian.svg"

import * as S from './styled'

const Profile = () => {
  const {
    site: {
      siteMetadata: { position, description }
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          position
          description
        }
      }
    }
  `)

  return (
    <S.ProfileWrapper>
      <S.ProfileLink to="/">
        <Logo style={{ width: 200 }} />
        <S.ProfilePosition>{position}</S.ProfilePosition>
      </S.ProfileLink>
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

export default Profile
