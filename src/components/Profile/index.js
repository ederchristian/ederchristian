import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Logo from "../../assets/logo-eder-christian.svg"

import * as S from './styled'

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description }
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          position
          description
        }
      }
    }
  `)

  return (
    <S.ProfileWrapper>
      <S.ProfileLink to="/">
        <Logo style={{ width: 250 }} />
        <S.ProfileAuthor>
          {title}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

export default Profile
