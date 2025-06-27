import { Subtitle } from '../components/subtitle'
import { Title } from '../components/title'
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
      <Title text='About' />
      <Subtitle text='Skills & Hobbies' />
      <div className='about-layout content-mt overflow-y-auto scrollbar-hide'>
        <FadeIn delay={200} className='about-section-layout'>
          {skills.map(skill => <Badge key={skill} className='text-[var(--aqua)]' text={skill} />)}
        </FadeIn>
        <FadeIn delay={600} className='about-section-layout'>
          {hobbies.map(hobby => <Badge key={hobby} className='text-[var(--ice)]' text={hobby} />)}
        </FadeIn>
      </div>
    </>
  )
}
