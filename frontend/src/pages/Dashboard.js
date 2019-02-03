import React from 'react'

import { withContext } from '../context'
import { PageWrapper, Title } from '../components/styled'

const Dashboard = ({ secret, getSecret }) => {
  const secretOrButton = secret ?
    <span>{secret}</span> :
    <button onClick={getSecret}>Get the secret resource</button>
  return (
    <div className='container'>
      <PageWrapper>
        <Title>Dashboard Page</Title>
        <p>{secretOrButton}</p>
      </PageWrapper>
    </div>
  )
}

export default withContext(Dashboard)
