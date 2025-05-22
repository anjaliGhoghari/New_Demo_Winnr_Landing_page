import React from 'react'
import logo from '../../assets/images/logo.png';
import { Link } from 'react-scroll';


function Header() {
  return (
   <>
     <header className=' py-6 sm:py-4 sticky z-50 top-0 bg-darkBg'>
        <div className='container'>
        <div className='flex justify-between items-center'>
        
        <Link to="hero-section" smooth={true} duration={700}><img className='max-w-[104px] w-100 cursor-pointer sm:max-w-[55px]' src={logo} alt='logo' /></Link>
            <nav>
                <ul className=' text-lightGray cursor-pointer flex gap-7 md:hidden '>
                <Link to="how-it-works" smooth={true} duration={700}><li>How it works</li></Link>
                <Link to="contest-format" smooth={true} duration={700}><li>Contests</li></Link>
                </ul>
            </nav>
            <a className='btn btn-green' href="http://app.winnr.fun/" ><span className='text-gradiant-green sm:text-xs'>launch app</span></a>
        </div>
        </div>
     </header>
   </>
  )
}

export default Header