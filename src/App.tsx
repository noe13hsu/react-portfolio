import './App.css'
import { Aside } from './components/aside'
import { Footer } from './components/footer'
import { Content } from './components/content'
import { Nav } from './components/nav'

function App() {
  return (
    <div className='bg-[var(--navy)] app-layout p-4'>
      <Nav />
      <Content />
      <Footer />
      <Aside />
    </div>
  )
}

export default App
