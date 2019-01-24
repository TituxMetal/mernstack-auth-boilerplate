import styled from 'styled-components'

const AuthWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 940px) {
    flex-direction: column;
    min-height: auto;
    height: auto;
  }
`

export default AuthWrapper
