import React from 'react'
import Header from './Header'

const Layout = ({children}) => {
  // function getHeight(headerHeight){
  //   console.log(headerHeight)
  // }
  return (
    <>
    {/* <Header handleCallback={getHeight}/> */}
    <Header/>
    <div>
        {children}
    </div>
    </>
  )
}

export default Layout