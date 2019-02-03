import styled from 'styled-components'

const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;

  p {
    margin-top: 4rem;

    span {
      border: 3px solid lightsalmon;
      font-size: 1.5rem;
      padding: 1rem;
    }

    button {
      margin: auto;
      background-color: deepskyblue;
      border: none;
      font-weight: bold;
      font-size: 1.5rem;
      cursor: pointer;
      padding: 2rem;
    }
  }
`

export default PageWrapper
