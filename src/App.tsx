import { Route, Routes } from 'react-router-dom'
import { FaBriefcase, FaCodepen, FaFacebook, FaGithub, FaHome, FaInfo, FaLinkedin, FaMailBulk } from "react-icons/fa"

import './App.css'
import { About } from './pages/about'
import { Home } from './pages/home'
import { IconLink } from './components/icon-link'
import { Projects } from './pages/projects'
import { Contact } from './pages/contact'
import { VerticalBar } from './components/vertical-bar'


function App() {
  return (
    <div className='grid grid-cols-[20%_1fr_20%] min-h-screen'>
      <nav className="flex flex-col items-center my-4">
        <IconLink Icon={FaHome} label='home' to="/" />
        <IconLink Icon={FaInfo} label='about' to="/about" />
        <IconLink Icon={FaBriefcase} label='projects' to="/projects" />
        <IconLink Icon={FaMailBulk} label='contact' to="/contact" />
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

      <aside className="flex flex-col items-center my-4">
        <IconLink Icon={FaFacebook} label='facebook' to='https://www.facebook.com/noe.hsu' />
        <IconLink Icon={FaLinkedin} label='linkedin' to="https://www.linkedin.com/in/noe-hsu-7828a4208/" />
        <IconLink Icon={FaGithub} label='github' to="https://github.com/noe13hsu" />
        <IconLink Icon={FaCodepen} label='codepen' to="https://codepen.io/noe13hsu" />
        <VerticalBar />
      </aside>
    </div>
  )
}

export default App
