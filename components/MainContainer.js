import React from 'react'
import Head from 'next/head'
import A from '../components/A'

const MainContainer = ({children, keywords}) => {
  return (
    <>
    <Head>
      <meta keywords={"igor tv, next js" + keywords}></meta>
      <title>MainPage</title>
    </Head>
    <div className='navbar'>
        <A href={'/'} text={"Main"}></A>
        <A href={'/users'} text={"Users"}></A>
    </div>
    <div>
        {children}
    </div>
    <style jsx>
        {`
          .navbar {
            background: green;
            padding: 20px;
          }
        `}
      </style>
    </>
  )
}

export default MainContainer