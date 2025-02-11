import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import PersonalProjectsPage from './pages/PersonalProjectsPage'
import ProjectPage from './pages/ProjectPage'
import AboutMePage from './pages/AboutMePage'
import GalleryPage from './pages/GalleryPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/works" element={<PersonalProjectsPage />} />
        <Route path="/project/:id" element={<ProjectPage />} />
        <Route path="/about-me" element={<AboutMePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
