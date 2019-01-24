import React from 'react'
import { withContext } from '../../../context';

const InputField = ( { fieldName, fieldType, fieldLabel, ...props } ) => (
  <div className='input-field'>
    <label htmlFor={fieldName}>{fieldLabel}</label>
    <input
      onChange={props.handleChange}
      className='grey-text text-lighten-2'
      type={fieldType}
      id={fieldName}
      name={fieldName}
      value={props[fieldName]}
    />
  </div>
)

export default withContext(InputField)
