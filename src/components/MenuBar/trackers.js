import ReactGA from 'react-ga'

export const themeTracker = theme => {
  ReactGA.event({
    category: 'theme',
    action: 'view',
    label: `Uses ${theme} theme`,
    nonInteraction: true
  })
}

export const menuTracker = () => {
  ReactGA.event({
    category: 'menu',
    action: 'click',
    label: 'Menu link at MenuBar'
  })
}

export const topClickTrack = () => {
  ReactGA.event({
    category: 'top',
    action: 'click',
    label: `Top at MenuBar`
  })
}
