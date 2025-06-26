import './App.css'
import { Aside } from './components/aside'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { Main } from './components/main'
import { Nav } from './components/nav'

function App() {
  return (
    <div className='bg-[var(--navy)] grid grid-rows-[auto_auto_6fr_auto_auto] grid-cols-1 h-[100dvh] lg:h-screen lg:grid-cols-[25%_1fr_25%] lg:grid-rows-[14%_1fr_6%]'>
      <Nav />
      <Header />
      <Main />
      <Footer />
      <Aside />
    </div>
  )
}

export default App
