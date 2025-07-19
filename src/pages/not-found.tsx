import { LuSkull } from 'react-icons/lu'

import { Subtitle } from '../components/subtitle'
import { Title } from '../components/title'

export const NotFound = () => {
  return (
    <>
      <Title text='404' />
      <Subtitle text='Not Found' />
      <div className='not-found-layout text-[var(--ice)] text-6xl md:text-8xl'>
        {Array.from({length: 16}, (_, index) => <LuSkull key={index} />)}
      </div>
    </>
  )
}
