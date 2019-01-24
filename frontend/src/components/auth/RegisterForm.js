import React from 'react'

import { AuthButton, InputField } from '../layout'
import { Form, Title } from '../styled'

const RegisterForm = () => (
  <Form method='post'>
    <Title>Register Component</Title>
    <InputField fieldType='text' fieldName='name' fieldLabel='Name' />
    <InputField fieldType='email' fieldName='email' fieldLabel='Email' />
    <InputField fieldType='password' fieldName='password' fieldLabel='Password' />
    <InputField fieldType='password' fieldName='passwordRepeat' fieldLabel='Repeat Password' />
    <AuthButton text='Register' />
  </Form>
)

export default RegisterForm
