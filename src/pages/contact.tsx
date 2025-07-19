import { Form } from '../components/contact/form'
import { Header } from '../components/header'
import { Main } from '../components/main'

export const Contact = () => {
  return (
    <>
      <Header subTitle={'Let\'s connect'} title='Contact' />
      <Main>
          <Form />
      </Main>
    </>
  )
}
