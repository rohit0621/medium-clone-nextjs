
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
          <div class='columns-5 px-20 text-center'>
            <div>Our story</div>
            <div>Membership</div>
            <div>Write</div>
            <div>Sign In</div>
            <button className='rounded-full bg-black text-white p-1 w-40'>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};


export default Header;
