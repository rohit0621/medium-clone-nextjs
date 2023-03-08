
import Link from 'next/link';
import React from 'react';

const Header = ({ children }) => {
  return (
    <>
      <div className='bg-yellow-500 content-between py-10'>
        <div className='columns-2 px-20'>
          <Link href='/' className='text-3xl font-bold'>
            Medium
          </Link>
          <div className='columns-5 px-20 text-center'>
            <div> 
              <Link href='/story' className='text-sm'>
               Our story
              </Link>
            </div>
            <div> 
              <Link href='/membership' className='text-sm'>
               Membership
              </Link>
            </div>
            <div> 
              <Link href='/write' className='text-sm'>
              Write
              </Link>
            </div>
            <div> 
              <Link href='/login' className='text-sm'>
               Sign In
              </Link>
            </div>
            <button className='rounded-full bg-black text-white p-1 w-40'>
            <Link href='/login' className='text-md'>
               Get Started
            </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};


export default Header;
