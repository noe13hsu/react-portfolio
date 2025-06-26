import { Link } from 'react-router-dom'

import logo from '../assets/images/logo.png'

export const Header = () => {
  return (
    <header className='header-layout'>
      <Link to='/'>
        <img alt='logo' className='w-20 md:w-30 lg:w-40' src={logo} />
      </Link>
    </header>
  )
}
