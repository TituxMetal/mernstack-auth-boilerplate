import React from 'react'
import styled from 'styled-components'

import { AuthButton } from '../layout'
import { Title } from '../styled';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 2rem;
  min-width: 30vw;
  button {
    margin: 1rem auto;
  }
`

const ThirdPartyAuth = () => (
  <Wrapper>
    <Title>OAuth Providers</Title>
    <AuthButton text='Google OAuth' />
    <AuthButton text='Github OAuth' />
    <AuthButton text='Facebook OAuth' />
  </Wrapper>
)

export default ThirdPartyAuth
