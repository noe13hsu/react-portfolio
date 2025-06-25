import { FadeIn } from '../fade-in'
import { VerticalBar } from '../vertical-bar'
import { Details } from './details'
import { HorizontalBar } from './horizontal-bar'
import { TimelineEntry } from './types'

const DETAILS_BASE_DELAY = 600
const BAR_INITIAL_DELAY = 200

export const TimelineItem = ({index, item} : {index: number, item: TimelineEntry}) => {
  const {type} = item
  const detailsDelay = DETAILS_BASE_DELAY * (index + 1)
  const barDelay = BAR_INITIAL_DELAY + DETAILS_BASE_DELAY * index

  return (
    <div className='grid grid-cols-[1fr_4%_auto_4%_1fr] text-[var(--ice)]'>
      {type === 'experience' && (
        <>
          <FadeIn delay={detailsDelay}>
            <Details item={item} />
          </FadeIn>
          <FadeIn delay={barDelay} className='flex'>
            <HorizontalBar />
          </FadeIn>
        </>
      )}

      <div className='flex justify-center col-start-3'>
        <VerticalBar />
      </div>

      {type === 'education' && (
        <>
          <FadeIn delay={barDelay} className='flex'>
            <HorizontalBar />
          </FadeIn>
          <FadeIn delay={detailsDelay}>
            <Details item={item} />
          </FadeIn>
        </>
      )}
    </div>
  )
}
