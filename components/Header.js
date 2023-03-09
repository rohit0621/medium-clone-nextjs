
import Link from 'next/link';
import React,{useEffect,useState} from 'react';


const Header = ({ children,handleCallback }) => {
  const[headerClass,setHeaderClass] = useState('bg-yellow-500')
console.log(headerClass)
const listenScrollEvent = e => {
  if (window.scrollY > 326) {
    setHeaderClass('bg-white')
  } 
  else{
setHeaderClass('bg-yellow-500')
  }
}
useEffect(()=>{
  window.addEventListener('scroll', listenScrollEvent)
})

  return (
    <>
      <div className= {`${headerClass} transition-colors duration-500 ease-in-out header content-between pt-4 sticky top-0 left-0 right-0`}>
        <div className='justify-between flex flex-row px-28'>
          <div><Link href='/' className='text-3xl font-bold'>
            Medium
          </Link>
          </div>
          <div className='flex justify-between items-center flex-row gap-6'>
            <div className='items-center'> 
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
            <button className='rounded-full bg-black text-white px-3 py-2 w-32'>
            <Link href='/login' className='text-sm'>
               Get Started
            </Link>
            </button>
          </div>
        </div>
        <div className="w-full h-px bg-black mt-4"></div>
      </div>
    </>
  );
};


export default Header;
