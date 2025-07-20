import { Skills } from '../components/about/skills'
import { Hobbies } from '../components/about/hobbies'
import { Header } from '../components/header'
import { Main } from '../components/main'


export const About = () => {
  return (
    <>
      <Header subTitle='Skills & Hobbies' title='About' />
      <Main className='about-layout lg:px-10'>
        <Skills />
        <Hobbies />
      </Main>
    </>
  )
}
