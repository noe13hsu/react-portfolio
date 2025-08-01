import { FadeIn } from '../fade-in'
import { TimelineEntry } from "./types"

export const Details = ({delay, item} : {delay: number, item: TimelineEntry}) => {
  const {info, institution, title, year} = item
  const header = title ? `${institution} - ${title}` : institution

  return (
    <FadeIn delay={delay}>
      <div className='relative bg-[var(--grey)] my-0 px-8 py-4 rounded-md lg:landscape:m-2'>
        <h3 className='text-[var(--aqua)] font-bold text-xl xl:text-2xl'>{header}</h3>
        <h4 className='font-bold xl:text-xl'>{year}</h4>
        <ul className='list-disc ml-4 xl:text-xl'>
          {info.map(infoItem => <li key={infoItem}>{infoItem}</li>)}
        </ul>
      </div>
    </FadeIn>
  )
}
