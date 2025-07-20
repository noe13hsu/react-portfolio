import { IconType } from 'react-icons'
import { LuWrench } from 'react-icons/lu'


export const IconLabel = ({className = '', Icon = LuWrench, label} : {className?: string, Icon?: IconType, label: string}) => {
  return (
    <div className='flex items-center'>
      <Icon className='w-6 h-6 text-[var(--aqua)]' />
      <span className={`truncate-one-line text-md text-[var(--ice)] h-fit ml-4 md:text-xl xl:text-2xl ${className}`}>{label}</span>
    </div>
  )
}
