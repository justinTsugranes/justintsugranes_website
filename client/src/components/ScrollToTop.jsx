// This component is a hook that allows the page to scroll to the top of the window when a new route is visited.
// It is implemented using the useEffect hook from React to update the window's scroll position.

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  // Get the current pathname of the route
  const { pathname } = useLocation()

  // This useEffect hook will run whenever the pathname changes
  useEffect(() => {
    // Scroll the window to the top of the page
    window.scrollTo(0, 0)
  }, [pathname]) // Re-run the effect when the pathname changes

  // This component does not render any JSX, so it returns null
  return null
}

export default ScrollToTop
