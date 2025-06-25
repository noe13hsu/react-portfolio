import { SubHeader } from '../components/sub-header'
import { Header } from '../components/header'
import { Form } from '../components/contact/form'

export const Contact = () => {
  return (
    <>
      <Header text='Contact' />
      <SubHeader text={'Let\'s connect'} />
      <Form />
    </>
  )
}
