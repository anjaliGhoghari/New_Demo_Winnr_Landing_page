import React from 'react'
import logo from '../../assets/images/logo.png';
import footer1 from '../../assets/images/footer-1.png';
import footer2 from '../../assets/images/footer-2.png';

function Footer() {
  return (
    <>
        <footer className='container'>
        <div className='py-20 sm:py-12' >
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
                                    <a><li>Terms & Conditions</li></a>
                                    <a><li>Privacy Policy</li></a>
                                </ul>
                            </div>
                            <div>
                                <h5 className='text-white mb-4 sm:mb-2'>
                                    Quick Links
                                </h5>
                                <ul className='text-lightGray flex flex-col gap-3 sm:gap-1 font-light'>
                                    <a href='https://winnr.gitbook.io/docs'><li>Docs</li></a>
                                    <a href='https://t.me/winnrfun'><li>Telegram</li></a>
                                    <a href='https://x.com/winnrdotfun'><li>Twitter/X</li></a>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className='w-full relative flex flex-col items-center text-center justify-center'>
                        <img src={footer1} className=' sm:max-w-[226px] absolute bottom-0' />
                        <img src={footer2} />

                    </div>

                    <div className='sm:p-3'>
                        <p className='absolute mt-8 bottom-8'>© 2025 Winnr • Built on Solana</p>
                    </div>
                </div>
           
        </footer>
    </>
  )
}

export default Footer