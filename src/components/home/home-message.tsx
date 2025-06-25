import { ReactNode } from 'react'
import { IconType } from 'react-icons'

import { DelayedRenderContainer } from '../delayed-render-container'

export const HomeMessage = ({children, delay, Icon } : {children: ReactNode, delay: number, Icon: IconType}) => {
  return (
    <DelayedRenderContainer delay={delay} className='flex mb-4'>
      <div className='flex justify-center items-start'>
        <Icon className='mt-1' />
      </div>
      <p className='ml-4'>
        {children}
      </p>
    </DelayedRenderContainer>
  )
}
