import { Subtitle } from '../components/subtitle'
import { Title } from '../components/title'
import { Skills } from 'components/about/skills'
import { Hobbies } from 'components/about/hobbies'

export const About = () => {
  return (
    <>
      <Title text='About' />
      <Subtitle text='Skills & Hobbies' />
      <div className='about-layout content-mt overflow-y-auto scrollbar-hide'>
        <Skills />
        <Hobbies />
      </div>
    </>
  )
}
