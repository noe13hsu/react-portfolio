import { FadeIn } from '../fade-in'

export const MobileBranch = ({delay, isRight = false} : {delay: number, isRight?: boolean}) => {
  return (
    <FadeIn className={`flex mx-8 ${isRight ? 'justify-end' : ''} lg:landscape:hidden`} delay={delay}>
      <div className='bg-[var(--aqua)] w-1 h-4' />
    </FadeIn>
  )
}
