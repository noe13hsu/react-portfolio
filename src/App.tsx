import { Link, Route, Routes } from 'react-router-dom'
import { TbBrandLeetcode } from 'react-icons/tb'

import {
  LuBriefcaseBusiness,
  LuCodepen,
  LuDownload,
  LuFacebook,
  LuGithub,
  LuHouse,
  LuInfo,
  LuLinkedin,
  LuMail,
} from 'react-icons/lu'

import './App.css'
import { About } from './pages/about'
import { Home } from './pages/home'
import { IconLink } from './components/icon-link'
import { Experience } from './pages/experience'
import { Contact } from './pages/contact'
import { VerticalBar } from './components/vertical-bar'
import logo from './assets/images/logo.png'

const externalLinks = [
  {
    Icon: LuFacebook,
    label: 'Facebook',
    to: 'https://www.facebook.com/noe.hsu',
  },
  {
    Icon: LuLinkedin,
    label: 'Linkedin',
    to: 'https://www.linkedin.com/in/noe-hsu-7828a4208/',
  },
  {
    Icon: LuGithub,
    label: 'Github',
    to: 'https://github.com/noe13hsu',
  },
  {
    Icon: LuCodepen,
    label: 'Codepen',
    to: 'https://codepen.io/noe13hsu',
  },
  {
    Icon: TbBrandLeetcode,
    label: 'Leetcode',
    to: 'https://leetcode.com/u/user3088m/',
  },
]

const internalLinks = [
  {
    element: <Home />,
    Icon: LuHouse,
    label: 'Home',
    to: '/',
  },
  {
    element: <About />,
    Icon: LuInfo,
    label: 'About',
    to: '/about',
  },
  {
    element: <Experience />,
    Icon: LuBriefcaseBusiness,
    label: 'Experience',
    to: '/experience',
  },
  {
    element: <Contact />,
    Icon: LuMail,
    label: 'Contact',
    to: '/contact',
  },
  {
    download: true,
    Icon: LuDownload,
    label: 'Download CV',
    to: '/cv.pdf',
  },
]

function App() {
  return (
    <div className='grid grid-rows-[auto_auto_6fr_auto_auto] grid-cols-1 h-[100dvh] lg:h-screen lg:grid-cols-[25%_1fr_25%] lg:grid-rows-[14%_1fr_6%]'>
      <nav className='flex justify-between items-center m-2 gap-4 lg:m-4 lg:col-start-1 lg:row-start-1 lg:row-span-3 lg:flex-col '>
        {internalLinks.map(({download, Icon, label, to}) => (
          <IconLink key={label} download={download} Icon={Icon} label={label} to={to} />
        ))}
        <VerticalBar />
      </nav>

      <header className='flex justify-center items-center lg:col-start-2 lg:row-start-1'>
        <Link to='/'><img alt='logo' className='w-20 lg:w-40' src={logo} /></Link>
      </header>

      <main className='flex flex-col items-center h-full min-h-0 lg:col-start-2 lg:row-start-2'>
        <Routes>
          {internalLinks.map(({element, to}) => <Route element={element} path={to} />)}
        </Routes>
      </main>

      <footer className='text-xs col-start-1 row-start-5 flex justify-center items-end lg:col-start-2 lg:row-start-3 lg:text-lg'>
        <p className='text-[var(--ice)] m-2'>&copy; 2025 All rights reserved.</p>
      </footer>

      <aside className='col-start-1 row-start-4 flex justify-between items-center m-2 gap-4 lg:m-4 lg:col-start-3 lg:row-start-1 lg:row-span-3 lg:flex-col'>
        <VerticalBar />
        {externalLinks.map(({Icon, label, to}) => <IconLink key={label} Icon={Icon} label={label} to={to} />)}
      </aside>
    </div>
  )
}

export default App
