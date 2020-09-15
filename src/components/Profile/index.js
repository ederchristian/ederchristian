import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Brand from "../Brand"
import Logo from "../../assets/logo-eder-christian.svg"

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
    <div className="Profile-wrapper">
      <Logo style={{ width: 250 }} />

      <h1>{title}</h1>
      <h2>{position}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Profile
