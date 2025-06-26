import { externalLinks } from '../routes'
import { IconLink } from './icon-link'
import { VerticalBar } from './vertical-bar'
import { HorizontalBar } from './horizontal-bar'

export const Aside = () => {
  return (
    <aside className='col-start-1 row-start-4 flex justify-between items-center m-2 gap-4 md:justify-end lg:m-4 lg:col-start-3 lg:row-start-1 lg:row-span-3 lg:flex-col'>
      <VerticalBar />
      <HorizontalBar />
      {externalLinks.map(({Icon, label, to}) => <IconLink key={label} Icon={Icon} label={label} to={to} />)}
    </aside>
  )
}
