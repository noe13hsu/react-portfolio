import { MobileBranch } from './mobile-branch'
import { Details } from './details'
import { TimelineEntry } from './types'
import { VerticalBar } from '../../components/vertical-bar'
import { DesktopBranch } from './desktop-branch'

const DETAILS_BASE_DELAY = 600
const BRANCH_INITIAL_DELAY = 200

export const TimelineItem = ({index, item} : {index: number, item: TimelineEntry}) => {
  const {type} = item
  const detailsDelay = DETAILS_BASE_DELAY * (index + 1)
  const branchDelay = BRANCH_INITIAL_DELAY + DETAILS_BASE_DELAY * index

  return (
    <div className='timeline-item-layout text-[var(--ice)]'>
      {type === 'experience' && (
        <>
          <MobileBranch delay={branchDelay} />
          <Details delay={detailsDelay} item={item} />
          <DesktopBranch delay={branchDelay} />
        </>
      )}

      <div className='hidden flex justify-center lg:landscape:block lg:landscape:col-start-3'>
        <VerticalBar />
      </div>

      {type === 'education' && (
        <>
          <MobileBranch delay={branchDelay} isRight />
          <DesktopBranch delay={branchDelay} />
          <Details delay={detailsDelay} item={item} />
        </>
      )}
    </div>
  )
}
