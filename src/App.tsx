import { Route, Routes } from 'react-router-dom'
import { FaBriefcase, FaHome, FaInfo, FaMailBulk } from "react-icons/fa";

import './App.css'
import { About } from './pages/about'
import { Home } from './pages/home'
import { IconLink } from './components/icon-link'
import { Projects } from './pages/projects';
import { Contact } from './pages/contact';
import { VerticalBar } from './components/vertical-bar';


function App() {
  return (
    <div className='grid grid-cols-[20%_1fr_20%] min-h-screen'>
      <nav className="flex flex-col items-center my-4">
        <IconLink>
          <FaHome />
        </IconLink>

        <IconLink to="/about">
          <FaInfo />
        </IconLink>

        <IconLink to="/projects">
          <FaBriefcase />
        </IconLink>

        <IconLink to="/contact">
          <FaMailBulk />
        </IconLink>

        <VerticalBar />
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
