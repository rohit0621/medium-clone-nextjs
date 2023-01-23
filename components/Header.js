import React from 'react'
import Link from 'next/link';

const Header = () => {
  return (
    <div className='bg-yellow-400'>
        <h1 className='text-4xl font-bold'>Header</h1>
        <ul>
          <li  className='text-red-500 text-4xl'><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
        
    </div>
  )
}

export default Header