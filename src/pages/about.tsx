import { SubHeader } from '../components/sub-header'
import { Header } from '../components/header'
import { Badge } from '../components/about/badge'
import { FadeIn } from '../components/fade-in'

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
      <div className='grid grid-cols-1 gap-6 mt-10 p-2 overflow-y-auto scrollbar-hide lg:mt-40 lg:grid-cols-[3fr_1fr] lg:gap-10'>
        <FadeIn delay={200} className='grid grid-cols-3 gap-3 h-fit'>
          {skills.map(skill => <Badge key={skill} className='text-[var(--aqua)]' text={skill} />)}
        </FadeIn>
        <FadeIn delay={600} className='grid grid-cols-3 lg:grid-cols-1 gap-3 h-fit'>
          {hobbies.map(hobby => <Badge key={hobby} className='text-[var(--ice)]' text={hobby} />)}
        </FadeIn>
      </div>
    </>
  )
}
