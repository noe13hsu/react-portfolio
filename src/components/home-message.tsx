import { ReactNode } from 'react'
import { IconType } from 'react-icons'

import { useDelayedRender } from '../hooks'

export const HomeMessage = ({children, delay, Icon } : {children: ReactNode, delay: number, Icon: IconType}) => {
  const shouldRender = useDelayedRender(delay)

  return (
    <div className={`flex mb-4 transition-opacity duration-500 ${shouldRender ? 'opacity-100' : 'opacity-0'}`}>
      <Icon />
      <p className='ml-4'>
        {children}
      </p>
    </div>
  )
}
