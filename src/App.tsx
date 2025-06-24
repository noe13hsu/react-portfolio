import { Link, Route, Routes } from 'react-router-dom'
import { FaBriefcase, FaCodepen, FaFacebook, FaGithub, FaHome, FaInfo, FaLinkedin, FaMailBulk } from 'react-icons/fa'

import './App.css'
import { About } from './pages/about'
import { Home } from './pages/home'
import { IconLink } from './components/icon-link'
import { Projects } from './pages/projects'
import { Contact } from './pages/contact'
import { VerticalBar } from './components/vertical-bar'
import logo from './assets/images/logo.png'


function App() {
  return (
    <div className='grid grid-cols-[25%_1fr_25%] grid-rows-[14%_1fr_6%] h-screen'>
      <nav className='col-start-1 row-start-1 row-span-3 flex flex-col items-center my-4'>
        <IconLink Icon={FaHome} label='home' to='/' />
        <IconLink Icon={FaInfo} label='about' to='/about' />
        <IconLink Icon={FaBriefcase} label='projects' to='/projects' />
        <IconLink Icon={FaMailBulk} label='contact' to='/contact' />
        <VerticalBar />
      </nav>

      <header className='col-start-2 row-start-1 flex justify-center items-center'>
        <Link to='/'><img src={logo} alt='logo' /></Link>
      </header>

      <main className='col-start-2 row-start-2 flex flex-col items-center h-full min-h-0'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>

      <footer className='col-start-2 row-start-3 flex justify-center items-end'>
        <p className='text-[var(--ice)] m-2'>&copy; 2025 All rights reserved.</p>
      </footer>

      <aside className='col-start-3 row-start-1 row-span-3 flex flex-col items-center my-4'>
        <VerticalBar />
        <IconLink Icon={FaFacebook} label='facebook' to='https://www.facebook.com/noe.hsu' />
        <IconLink Icon={FaLinkedin} label='linkedin' to='https://www.linkedin.com/in/noe-hsu-7828a4208/' />
        <IconLink Icon={FaGithub} label='github' to='https://github.com/noe13hsu' />
        <IconLink Icon={FaCodepen} label='codepen' to='https://codepen.io/noe13hsu' />
      </aside>
    </div>
  )
}

export default App
