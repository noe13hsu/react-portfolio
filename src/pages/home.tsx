import { Header } from '../components/header'
import { Main } from '../components/main'
import { HomeMessages } from '../components/home/home-messages'

export const Home = () => {
  return (
    <>
      <Header subTitle='Software developer' title='Noe Hsu' />
      <Main className='home-layout text-2xl'>
        <HomeMessages />
      </Main>
    </>
  )
}
