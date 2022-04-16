import Head from 'next/head'
import React from 'react'

import FireWorks from '../assets/fireworks.svg'

const Home:React.FC = () =>{
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main >
        <img src={FireWorks} alt='yaaay'/>
        Hello world
      </main>
    </div>
  )
}

export default Home
