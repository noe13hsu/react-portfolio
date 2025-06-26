import { ReactNode } from 'react'
import { IconType } from 'react-icons'

import { FadeIn } from '../fade-in'

export const HomeMessage = ({children, delay, Icon } : {children: ReactNode, delay: number, Icon: IconType}) => {
  return (
    <FadeIn delay={delay} className='flex mb-4'>
      <div className='flex justify-center items-start'>
        <Icon className='mt-1' />
      </div>
      <p className='text-lg ml-4 lg:text-2xl'>
        {children}
      </p>
    </FadeIn>
  )
}
