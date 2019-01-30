import React from 'react'
import { withFormik, Form } from 'formik'

import { AuthButton, InputField } from '../layout'
import { Title, Messages } from '../styled'
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
      {errors.global && (
        <Messages>
          <header>Somethings went wrong!</header>
          <p>{errors.global}</p>
        </Messages>
      )}
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
  handleSubmit: (values, { props: { submitHandler }, setSubmitting, setErrors }) => {
    setSubmitting(false)
    submitHandler(values)
      .then(res => {res && setErrors(res.errors)})
  }
})

export default withContext(FormikLogin(LoginForm))
