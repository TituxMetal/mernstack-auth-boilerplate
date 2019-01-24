import React from 'react'

import LoginForm from '../components/auth/LoginForm'
import { AuthWrapper } from '../components/styled'
import ThirdPartyAuth from '../components/auth/ThirdPartyAuth';

const Login = () => (
  <div className='container'>
    <AuthWrapper>
      <LoginForm />
      <ThirdPartyAuth />
    </AuthWrapper>
  </div>
)

export default Login
