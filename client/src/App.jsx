import * as React from 'react'

import { Routes, Route } from 'react-router-dom'
import { Footer, PreFooter, Navigation, ScrollToTop } from './components'
import { Home } from './pages'

// Lazy Loading
const About = React.lazy(() => import('./pages/About'))
const Projects = React.lazy(() => import('./pages/Projects'))

function App() {
  return (
    <div>
      <ScrollToTop />
      <Navigation />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="projects"
          element={
            <React.Suspense fallback="Loading...">
              <Projects />
            </React.Suspense>
          }
        />
        <Route
          path="about"
          element={
            <React.Suspense fallback="Loading...">
              <About />
            </React.Suspense>
          }
        />
        {/* TODO: CREATE 404 */}
        {/* <Route path="*" element={<FourZeroFour />} /> */}
      </Routes>

      <PreFooter />

      <Footer />
    </div>
  )
}

export default App
