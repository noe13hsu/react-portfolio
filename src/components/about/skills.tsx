import { FadeIn } from 'components/fade-in'
import { Badge } from './badge'

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

export const Skills = () => {
  return (
    <FadeIn delay={200} className='about-section-layout'>
      {skills.map(skill => <Badge key={skill} className='text-[var(--aqua)]' text={skill} />)}
    </FadeIn>
  )
}
