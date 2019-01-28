import React from 'react'
import { Field } from 'formik'
import { withContext } from '../../../context'


const InputField = ({ field, errors, touched }) => {
  const classes = `input-field${!!touched[field.name] && !!errors[field.name] ? ' errors' : ''}`
  return (
    <div className={classes}>
      <label htmlFor={field.name}>{field.label}</label>
      <Field type={field.type} name={field.name} id={field.name} />
      {touched[field.name] && errors[field.name] && <p>{errors[field.name]}</p>}
    </div>
  )
}

export default withContext(InputField)
