import React from 'react'

import RegisterForm from '../components/auth/RegisterForm'
import { AuthWrapper } from '../components/styled'
import ThirdPartyAuth from '../components/auth/ThirdPartyAuth';

const Register = () => (
  <div className='container'>
    <AuthWrapper>
      <RegisterForm />
      <ThirdPartyAuth />
    </AuthWrapper>
  </div>
)

export default Register
