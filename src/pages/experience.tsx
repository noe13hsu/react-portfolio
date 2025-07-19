import { TimeLine } from '../components/experience/timeline'
import { Header } from '../components/header'
import { Main } from '../components/main'

export const Experience = () => {
  return (
    <>
      <Header subTitle='Work & Education' title='Experience' />
      <Main>
        <TimeLine />
      </Main>
    </>
  )
}
