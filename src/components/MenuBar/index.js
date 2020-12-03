import React from 'React'

import { Home } from '@styled-icons/entypo/Home'
import { SearchAlt2 as Search } from '@styled-icons/boxicons-regular/SearchAlt2'
import { UpArrowAlt as Arrow } from '@styled-icons/boxicons-regular/UpArrowAlt'
import { LightBulb as Light } from '@styled-icons/entypo/LightBulb'
import { GridHorizontal as Grid } from '@styled-icons/boxicons-regular/GridHorizontal'

import * as S from './styled'

const MenuBar = () => (
  <S.MenuBarWrapper>
    <S.MenuBarGroup>
      <S.MenuBarLink to="/" title="Go back to Home">
        <S.MenuBarItem><Home /></S.MenuBarItem>
      </S.MenuBarLink>
    </S.MenuBarGroup>

    <S.MenuBarGroup>
      <S.MenuBarItem title="Change theme"><Light /></S.MenuBarItem>
      <S.MenuBarItem title="Change visualization"><Grid /></S.MenuBarItem>
      <S.MenuBarItem title="Go to top"><Arrow /></S.MenuBarItem>
    </S.MenuBarGroup>
  </S.MenuBarWrapper>
)

export default MenuBar
