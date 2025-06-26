import { FadeIn } from '../fade-in'

export const DesktopBranch = ({delay} : {delay: number}) => {
  return (
    <FadeIn className='hidden lg:flex' delay={delay}>
      <div className='w-full h-1 bg-[var(--aqua)] m-auto' />
    </FadeIn>
  )
}
