import React from 'react'
import logo from '../../assets/images/logo.png';


function Header() {
  return (
   <>
     <header className='sticky z-50 top-0 bg-darkBg'>
        <div className='container py-6 sm:py-4 '>
        <div className='flex justify-between items-center'>
        <img className='max-w-[104px] w-100 cursor-pointer sm:max-w-[55px]' src={logo} alt='logo' />
            <nav>
                <ul className=' text-lightGray cursor-pointer flex gap-7 md:hidden '>
                    <li>How it works</li>
                    <li>Contests</li>
                </ul>
            </nav>
            <a className='btn btn-green' href="" ><span className='text-gradiant-green sm:text-xs'>launch app</span></a>
        </div>
        </div>
     </header>
   </>
  )
}

export default Header