import {
  IoBaseballOutline,
  IoBasketballOutline,
  IoExtensionPuzzleOutline,
  IoFilmOutline,
  IoGameControllerOutline,
  IoMusicalNotesOutline,
} from 'react-icons/io5';

import { FadeIn } from '../fade-in'
import { IconLabel } from './icon-label'

const hobbies = [
  {Icon: IoGameControllerOutline, label: 'Gaming'},
  {Icon: IoFilmOutline, label: 'Movies'},
  {Icon: IoMusicalNotesOutline, label: 'Music'},
  {Icon: IoBasketballOutline, label: 'Basketball'},
  {Icon: IoBaseballOutline, label: 'Baseball'},
  {Icon: IoExtensionPuzzleOutline, label: 'Gundam model kits'},
]

export const Hobbies = () => {
  return (
    <FadeIn className='about-section-layout' delay={600}>
      {hobbies.map(({Icon, label}) => <IconLabel key={label} Icon={Icon} label={label} />)}
    </FadeIn>
  )
}
