import './App.css'
import { Aside } from './components/aside'
import { Footer } from './components/footer'
import { Content } from './components/content'
import { Nav } from './components/nav'

function App() {
  return (
    <div className='bg-[var(--navy)] text-[var(--ice)] app-layout'>
      <Nav />
      <Content />
      <Footer />
      <Aside />
    </div>
  )
}

export default App
