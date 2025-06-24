import { VerticalBar } from '../vertical-bar'
import { Details } from './details'
import { TimelineEntry } from './types'

export const TimelineItem = ({item} : {item: TimelineEntry}) => {
  const {type} = item

  return (
    <div className='grid grid-cols-[1fr_4%_auto_4%_1fr] text-[var(--ice)]'>
      {type === 'experience' && (
        <>
          <Details item={item} />
          <div className='w-full h-1 bg-[var(--aqua)] m-auto' />
        </>
      )}

      <div className='flex justify-center col-start-3'>
        <VerticalBar />
      </div>

      {type === 'education' && (
        <>
          <div className='w-full h-1 bg-[var(--aqua)] m-auto' />
          <Details item={item} />
        </>
      )}
    </div>
  )
}
