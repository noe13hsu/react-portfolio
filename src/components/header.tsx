import { Title } from './title'
import { Subtitle } from './subtitle'

export const Header = ({subTitle, title } : {subTitle: string, title: string}) => {
  return (
    <header className='header-layout'>
      <Title text={title} />
      <Subtitle text={subTitle} />
    </header>
  )
}
