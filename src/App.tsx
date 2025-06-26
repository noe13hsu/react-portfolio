import './App.css'
import { IconLink } from './components/icon-link'
import { VerticalBar } from './components/vertical-bar'
import { Header } from './components/header'
import { externalLinks } from './routes'
import { Main } from './components/main'
import { Nav } from './components/nav'

function App() {
  return (
    <div className='grid grid-rows-[auto_auto_6fr_auto_auto] grid-cols-1 h-[100dvh] lg:h-screen lg:grid-cols-[25%_1fr_25%] lg:grid-rows-[14%_1fr_6%]'>
      <Nav />
      <Header />
      <Main />

      <footer className='text-xs col-start-1 row-start-5 flex justify-center items-end lg:col-start-2 lg:row-start-3 lg:text-lg'>
        <p className='text-[var(--ice)] mb-1 lg:m-2'>&copy; 2025 All rights reserved.</p>
      </footer>

      <aside className='col-start-1 row-start-4 flex justify-between items-center m-2 gap-4 lg:m-4 lg:col-start-3 lg:row-start-1 lg:row-span-3 lg:flex-col'>
        <VerticalBar />
        {externalLinks.map(({Icon, label, to}) => <IconLink key={label} Icon={Icon} label={label} to={to} />)}
      </aside>
    </div>
  )
}

export default App
