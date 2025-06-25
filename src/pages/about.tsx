import { SubHeader } from '../components/sub-header'
import { Header } from '../components/header'
import { Badge } from '../components/about/badge'

const hobbies = [
  'Gaming',
  'Movies',
  'Music',
  'Basketball',
  'Baseball',
  'Gundam model kits'
]

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'Material UI',
  'Bootstrap',
  'Tailwind CSS',
  'React Leaflet',
  'HERE Maps API',
  'ApexCharts',
  'Nivo Charts',
  'Lodash',
  'Ruby on Rails',
  'PostgreSQL',
  'GitHub',
  'WordPress',
  'Figma',
]

export const About = () => {
  return (
    <>
      <Header text='About' />
      <SubHeader text='Skills & Hobbies' />
      <div className='grid grid-cols-[3fr_1fr] gap-10 mt-40'>
        <div className='grid grid-cols-3 gap-3 h-fit'>
          {skills.map(skill => <Badge key={skill} className='text-[var(--aqua)]' text={skill} />)}
        </div>
        <div className='grid grid-cols-1 gap-3 h-fit'>
          {hobbies.map(hobby => <Badge key={hobby} className='text-[var(--ice)]' text={hobby} />)}
        </div>
      </div>
    </>
  )
}
