import React from 'react'
import { withFormik, Form } from 'formik'

import { AuthButton, InputField } from '../layout'
import { Title } from '../styled'
import { withContext } from '../../context'
import { loginSchema } from '../../validationSchema/auth'

const LoginForm = ({ errors, touched }) => {
  const fields = [
    { name: 'email', type: 'email', label: 'Email' },
    { name: 'password', type: 'password', label: 'Password' }
  ]
  return (
    <Form>
      <Title>Login Component</Title>
      {fields.map(field => (
        <InputField
          key={field.name}
          field={field}
          errors={errors}
          touched={touched}
        />
      ))}
      <AuthButton text='Login' />
    </Form>
  )
}

const FormikLogin = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || '',
      password: password || ''
    }
  },
  validationSchema: loginSchema,
  handleSubmit: (values, { props: { submitHandler }, setSubmitting }) => {
    setSubmitting(false)
    submitHandler(values)
  }
})

export default withContext(FormikLogin(LoginForm))
