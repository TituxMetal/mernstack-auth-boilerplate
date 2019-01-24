import React from 'react'

import { AuthButton, InputField } from '../layout'
import { Form, Title } from '../styled'

const LoginForm = () => (
  <Form method='post'>
    <Title>Login Component</Title>
    <InputField fieldType='email' fieldName='email' fieldLabel='Email' />
    <InputField fieldType='password' fieldName='password' fieldLabel='Password' />
    <AuthButton text='Login' />
  </Form>
)

export default LoginForm
