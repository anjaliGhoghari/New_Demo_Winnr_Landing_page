import React from 'react'
import logo from '../../assets/images/logo.png';
import footer1 from '../../assets/images/footer-1.png';
import footer2 from '../../assets/images/footer2.png';

function Footer() {
    return (
        <>
            <footer className=' pt-20 sm:pt-12'>
                <div className='container' >
                    <div className='flex sm:flex-col justify-between mb-[300px] sm:mb-[150px]'>
                        <div>
                            <a> <img className='w-100 max-w-[104px] sm:max-w-[55px]  cursor-pointer mb-7 sm:mb-2 ' src={logo} /></a>
                            <p className='max-w-[438px] sm:mb-10'>We run fast-paced contests around tokens, trends, ecosystems, and even real-world events where users draft picks and win USDC based on live performance.</p>
                        </div>
                        <div className='flex text-right sm:text-left sm:gap-10 gap-20 '>
                            <div>
                                <h5 className='text-white mb-4 sm:mb-2 '>
                                    Legal
                                </h5>
                                <ul className='text-lightGray flex flex-col gap-3 sm:gap-1 font-light'>
                                    <li><a>Terms & Conditions</a></li>
                                    <li><a>Privacy Policy</a></li>
                                </ul>
                            </div>
                            <div>
                                <h5 className='text-white mb-4 sm:mb-2'>
                                    Quick Links
                                </h5>
                                <ul className='text-lightGray flex flex-col gap-3 sm:gap-1 font-light'>
                                    <li><a href='https://winnr.gitbook.io/docs'>Docs</a></li>
                                    <li><a href='https://t.me/winnrfun'>Telegram</a></li>
                                    <li> <a href='https://x.com/winnrdotfun'>Twitter/X</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='relative flex justify-center items-center w-full'>
                    <img src={footer2} className='w-full max-w-[2000px]' />
                    <img src={footer1} className="absolute bottom-2 sm:w-[200px] w-[552px]"
 />

                </div>

                <div className='container'>
                    <div className='sm:p-3'>
                        <p className='absolute mt-4 bottom-10'>© 2025 Winnr • Built on Solana</p>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer
