import { FadeIn } from '../fade-in'
import { Badge } from './badge'

const hobbies = [
  'Gaming',
  'Movies',
  'Music',
  'Basketball',
  'Baseball',
  'Gundam model kits'
]

export const Hobbies = () => {
  return (
    <FadeIn delay={600} className='about-section-layout'>
      {hobbies.map(hobby => <Badge key={hobby} className='text-[var(--ice)]' text={hobby} />)}
    </FadeIn>
  )
}
