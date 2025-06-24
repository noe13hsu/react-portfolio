import { VerticalBar } from '../vertical-bar'
import { Details } from './details'
import { HorizontalBar } from './horizontal-bar'
import { TimelineEntry } from './types'

export const TimelineItem = ({item} : {item: TimelineEntry}) => {
  const {type} = item

  return (
    <div className='grid grid-cols-[1fr_4%_auto_4%_1fr] text-[var(--ice)]'>
      {type === 'experience' && (
        <>
          <Details item={item} />
          <HorizontalBar />
        </>
      )}

      <div className='flex justify-center col-start-3'>
        <VerticalBar />
      </div>

      {type === 'education' && (
        <>
          <HorizontalBar />
          <Details item={item} />
        </>
      )}
    </div>
  )
}
