import { object as yupObject, string as yupString, ref as yupRef } from 'yup'

const nameField = {
  name: yupString()
    .min(3, 'Name must be at least 3 characters long')
    .required('Name is required')
}

const emailField = {
  email: yupString()
    .email('Email is not a valid email')
    .required('Email is required')
}

const passwordField = {
  password: yupString()
    .min(5, 'Password must be at least 5 characters long')
    .required('Password is required')
}

const passwordRepeatField = {
  passwordRepeat: yupString()
    .oneOf([yupRef('password')], 'Passwords must be the same')
    .required('Password confimation is required')
}

export const loginSchema = yupObject().shape({
  ...emailField, ...passwordField
})

export const registerSchema = yupObject().shape({
  ...nameField, ...emailField, ...passwordField, ...passwordRepeatField
})
