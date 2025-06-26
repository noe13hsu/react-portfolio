import { externalLinks } from '../routes'
import { IconLink } from './icon-link'
import { VerticalBar } from './vertical-bar'
import { HorizontalBar } from './horizontal-bar'

export const Aside = () => {
  return (
    <aside className='aside-layout'>
      <VerticalBar />
      <HorizontalBar />
      {externalLinks.map(({Icon, label, to}) => <IconLink key={label} Icon={Icon} label={label} to={to} />)}
    </aside>
  )
}
