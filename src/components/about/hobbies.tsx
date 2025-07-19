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
    <FadeIn className='about-section-layout' delay={600}>
      {hobbies.map(hobby => <Badge key={hobby} className='text-[var(--ice)]' text={hobby} />)}
    </FadeIn>
  )
}
