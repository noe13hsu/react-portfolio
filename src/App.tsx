import { Link, Route, Routes } from 'react-router-dom'
import { LuBriefcaseBusiness, LuCodepen, LuFacebook, LuGithub, LuHouse, LuInfo, LuLinkedin, LuMail } from 'react-icons/lu'
import { TbBrandLeetcode } from 'react-icons/tb'

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
    label: 'facebook',
    to: 'https://www.facebook.com/noe.hsu',
  },
  {
    Icon: LuLinkedin,
    label: 'linkedin',
    to: 'https://www.linkedin.com/in/noe-hsu-7828a4208/',
  },
  {
    Icon: LuGithub,
    label: 'github',
    to: 'https://github.com/noe13hsu',
  },
  {
    Icon: LuCodepen,
    label: 'codepen',
    to: 'https://codepen.io/noe13hsu',
  },
  {
    Icon: TbBrandLeetcode,
    label: 'leetcode',
    to: 'https://leetcode.com/u/user3088m/',
  },
]

const internalLinks = [
  {
    element: <Home />,
    Icon: LuHouse,
    label: 'home',
    to: '/',
  },
  {
    element: <About />,
    Icon: LuInfo,
    label: 'about',
    to: '/about',
  },
  {
    element: <Experience />,
    Icon: LuBriefcaseBusiness,
    label: 'experience',
    to: '/experience',
  },
  {
    element: <Contact />,
    Icon: LuMail,
    label: 'contact',
    to: '/contact',
  },
]

function App() {
  return (
    <div className='grid grid-cols-[25%_1fr_25%] grid-rows-[14%_1fr_6%] h-screen'>
      <nav className='col-start-1 row-start-1 row-span-3 flex flex-col items-center my-4'>
        {internalLinks.map(({Icon, label, to}) => <IconLink key={label} Icon={Icon} label={label} to={to} />)}
        <VerticalBar />
      </nav>

      <header className='col-start-2 row-start-1 flex justify-center items-center'>
        <Link to='/'><img src={logo} alt='logo' /></Link>
      </header>

      <main className='col-start-2 row-start-2 flex flex-col items-center h-full min-h-0'>
        <Routes>
          {internalLinks.map(({element, to}) => <Route element={element} path={to} />)}
        </Routes>
      </main>

      <footer className='col-start-2 row-start-3 flex justify-center items-end'>
        <p className='text-[var(--ice)] m-2'>&copy; 2025 All rights reserved.</p>
      </footer>

      <aside className='col-start-3 row-start-1 row-span-3 flex flex-col items-center my-4'>
        <VerticalBar />
        {externalLinks.map(({Icon, label, to}) => <IconLink key={label} Icon={Icon} label={label} to={to} />)}
      </aside>
    </div>
  )
}

export default App
