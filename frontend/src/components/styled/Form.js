import styled from 'styled-components'

const Form = styled.form`
  padding: 2rem;
  min-width: 30vw;
  input:not([type]):focus:not([readonly]),
  input[type=text]:not(.browser-default):focus:not([readonly]),
  input[type=password]:not(.browser-default):focus:not([readonly]),
  input[type=email]:not(.browser-default):focus:not([readonly]) {
    border-bottom: 1px solid ${props => props.theme.secondaryColor};
    box-shadow: 0 1px 0 0 ${props => props.theme.secondaryColor};
  }
`

export default Form
