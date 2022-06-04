import React, { useState, useEffect } from "react"

import { UpArrowAlt as Arrow } from "@styled-icons/boxicons-regular/UpArrowAlt"
import { LightBulb as Light } from "@styled-icons/entypo/LightBulb"
import { Menu } from "@styled-icons/boxicons-regular/Menu"

import * as Styled from "./styled"

import * as GA from "./trackers"

const MenuBar = ({ setIsMenuOpen, isMenuOpen }) => {
  const [theme, setTheme] = useState(null)

  const isDarkMode = theme === "dark"

  if (theme !== null) {
    GA.themeTracker(theme)
  }

  useEffect(() => {
    setTheme(window.__theme)

    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  const openMenu = () => {
    GA.menuTracker()
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <Styled.MenuBarWrapper>
      <Styled.MenuBarGroupMobile>
        <Styled.MenuBarGroup>
          <Styled.MenuBarItem title="Open Menu" onClick={openMenu}>
            <Menu />
          </Styled.MenuBarItem>
        </Styled.MenuBarGroup>
      </Styled.MenuBarGroupMobile>

      <Styled.MenuBarGroup>
        <Styled.MenuBarItem
          title="Change theme"
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? "light" : "dark")

            if (window.DISQUS !== undefined) {
              window.setTimeout(() => {
                window.DISQUS.reset({
                  reload: true,
                })
              }, 300)
            }
          }}
          className={theme}
          isDarkMode={isDarkMode}
        >
          <Light />
        </Styled.MenuBarItem>
        <Styled.MenuBarItem
          title="Go to top"
          onClick={() => {
            window.scroll({ top: 0, behavior: "smooth" })
          }}
        >
          <Arrow />
        </Styled.MenuBarItem>
      </Styled.MenuBarGroup>
    </Styled.MenuBarWrapper>
  )
}

export default MenuBar
