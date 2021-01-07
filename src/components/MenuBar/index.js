import React, { useState, useEffect } from 'react'

import { Home } from '@styled-icons/entypo/Home'
import { UpArrowAlt as Arrow } from '@styled-icons/boxicons-regular/UpArrowAlt'
import { LightBulb as Light } from '@styled-icons/entypo/LightBulb'
import { GridHorizontal as Grid } from '@styled-icons/boxicons-regular/GridHorizontal'
import { ListUl as List} from '@styled-icons/boxicons-regular/ListUl'
import { Menu } from '@styled-icons/boxicons-regular/Menu'

import getThemeColor from '../../utils/getThemeColor'

import * as S from './styled'

import * as GA from './trackers'

const MenuBar = ({ setIsMenuOpen, isMenuOpen }) => {
  const [theme, setTheme] = useState(null)
  const [display, setDisplay] = useState(null)

  const isDarkMode = theme === 'dark'
  const isListMode = display === 'list'

  if (theme !== null) {
    GA.themeTracker(theme)
  }

  useEffect(() => {
    setTheme(window.__theme)
    setDisplay(window.__display)

    window.__onThemeChange = () => setTheme(window.__theme)
    window.__onDisplayChange = () => setDisplay(window.__display)
  }, [])

  const openMenu = () => {
    GA.menuTracker()
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink 
          to="/"
          title="Go back to Home"
          cover
          direction="right"
          bg={getThemeColor()}
          duration={0.5}
          activeClassName="active"
        >
          <S.MenuBarItem>
            <Home />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>

      <S.MenuBarGroupMobile>
        <S.MenuBarGroup>
          <S.MenuBarItem title="Open Menu" onClick={openMenu}>
            <Menu />
          </S.MenuBarItem>
        </S.MenuBarGroup>
      </S.MenuBarGroupMobile>

      <S.MenuBarGroup>
        <S.MenuBarItem
          title="Change theme"
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')

            if (window.DISQUS !== undefined) {
              window.setTimeout(() => {
                window.DISQUS.reset({
                  reload: true
                })
              }, 300)
            }
          }}
          className={theme}
          isDarkMode={isDarkMode}
        >
          <Light />
        </S.MenuBarItem>
        <S.MenuBarItem
          title="Change visualization"
          onClick={() => {
            window.__setPreferredDisplay(isListMode ? 'grid' : 'list')
          }}
          className="display"
        >
          {isListMode ? <Grid /> : <List />}
        </S.MenuBarItem>
        <S.MenuBarItem
          title="Go to top"
          onClick={() => {
            window.scroll({ top: 0, behavior: 'smooth' })
          }}
        >
          <Arrow />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}

export default MenuBar
