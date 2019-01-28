import styled from 'styled-components'

const AuthWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  form {
    padding: 2rem;
    min-width: 30vw;
    input:not([type]):focus:not([readonly]),
    input[type=text]:not(.browser-default):focus:not([readonly]),
    input[type=password]:not(.browser-default):focus:not([readonly]),
    input[type=email]:not(.browser-default):focus:not([readonly]) {
      border-bottom: 1px solid ${props => props.theme.secondaryColor};
      box-shadow: 0 1px 0 0 ${props => props.theme.secondaryColor};
    }
    .errors {
      p {
        color: darkred;
        font-weight: bold;
        background-color: tomato;
        padding: .8rem;
        text-align: center;
      }
      label {
        color: tomato;
      }
      input  {
        color: tomato;
      }
      input,
      input[type=text]:not(.browser-default):focus:not([readonly]),
      input[type=email]:not(.browser-default):focus:not([readonly]),
      input[type=password]:not(.browser-default):focus:not([readonly]) {
        border-bottom: 1px solid tomato;
        box-shadow: 0 1px 0 0 tomato;
      }
    }
  }
  @media screen and (max-width: 940px) {
    flex-direction: column;
    min-height: auto;
    height: auto;
  }
`

export default AuthWrapper
