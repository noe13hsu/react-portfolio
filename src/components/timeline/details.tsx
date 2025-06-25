import { TimelineEntry } from "./types"

export const Details = ({item} : {item: TimelineEntry}) => {
  const {info, institution, title, year} = item
  const header = title ? `${institution} - ${title}` : institution

  return (
    <div className='relative bg-[var(--grey)] m-2 p-4 rounded-md'>
        <h3 className='text-[var(--aqua)] font-bold text-xl'>{header}</h3>
        <h4 className='font-bold'>{year}</h4>
        <ul className='list-disc ml-4'>
          {info.map(infoItem => <li key={infoItem}>{infoItem}</li>)}
        </ul>
    </div>
  )
}
