import './App.css'
import { Aside } from './components/aside'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { Main } from './components/main'
import { Nav } from './components/nav'

function App() {
  return (
    <div className='bg-[var(--navy)] app-layout'>
      <Nav />
      <Header />
      <Main />
      <Footer />
      <Aside />
    </div>
  )
}

export default App
