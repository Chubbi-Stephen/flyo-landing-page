import React from 'react'
import Form from '../signIn/index'
import FooterInfo from '../footerInfo/index'

const index = () => {
  return (
    <section className="footer absolute w-full">
      <Form />
      <FooterInfo />
    </section>
  )
}

export default index
