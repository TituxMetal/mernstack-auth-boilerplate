import React from 'react'
import { withFormik, Form } from 'formik'

import { AuthButton, InputField } from '../layout'
import { Title } from '../styled'
import { withContext } from '../../context'
import { registerSchema } from '../../validationSchema/auth'

const RegisterForm = ({ errors, touched }) => {
  const fields = [
    { name: 'name', type: 'text', label: 'Name' },
    { name: 'email', type: 'email', label: 'Email' },
    { name: 'password', type: 'password', label: 'Password' },
    { name: 'passwordRepeat', type: 'password', label: 'Repeat Password' }
  ]
  return (
    <Form>
      <Title>Register Component</Title>
      {fields.map(field => (
        <InputField
          key={field.name}
          field={field}
          errors={errors}
          touched={touched}
        />
      ))}
      <AuthButton text='Register' />
    </Form>
  )
}

const FormikRegister = withFormik({
  mapPropsToValues({ name, email, password, passwordRepeat }) {
    return {
      name: name || '',
      email: email || '',
      password: password || '',
      passwordRepeat: passwordRepeat || ''
    }
  },
  validationSchema: registerSchema,
  handleSubmit: (values, { props: { submitHandler }, setSubmitting }) => {
    setSubmitting(false)
    submitHandler(values)
  }
})

export default withContext(FormikRegister(RegisterForm))
