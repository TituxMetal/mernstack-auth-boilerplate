import React from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.div`
  text-align: center;
  button {
    background-color: ${props => props.theme.secondaryColor};
    border: none;
    font-weight: bold;
    cursor: pointer;
    height: 54px;
    line-height: 54px;
    padding: 0 28px;
  }
`

const AuthButton = ({ text }) => (
  <ButtonWrapper>
    <button>{text}</button>
  </ButtonWrapper>
)

export default AuthButton
