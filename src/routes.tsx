import { TbBrandLeetcode } from 'react-icons/tb'

import { About } from './pages/about'
import { Home } from './pages/home'
import { Experience } from './pages/experience'
import { Contact } from './pages/contact'

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

export const externalLinks = [
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

export const internalLinks = [
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
