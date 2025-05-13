import React from 'react'
import HeroImage from "../../assets/images/HeroImage.png"
import ShadowBlack from '../../assets/images/ShadowBlack.png'



function HeroSection() {
    return (
        <>
            <section className='container pb-20' id='hero-section' >
                <div className='relative'>
                    <img
                        src={HeroImage}
                        alt="HeroImage"
                        className="md:mt-0  -mt-8 w-full"
                    />
                    
                    <div className='-mt-[245px] absolute w-full flex flex-col text-center items-center justify-center bg-no-repeat h-[432px] sm:h-[682px] object-cover bg-center' 
                    style={{ backgroundImage: `url(${ShadowBlack})`
                     }}>
                        <h1 className=' mb-4 md:mb-3 max-w-[802px] sm:max-w-[357px] sm:-mt-[92px] md:max-w-[540px]'>
                            Make the Right Picks Win Real Rewards
                        </h1>
                        <p className='mb-10 md:mb-8 max-w-[518px] md:max-w-[256px] md:leading-tight leading-7'>Your instincts already follow the right tokens, trends, and memes. Now get rewarded for it.</p>
                        <a className='btn btn-green'  href="http://app.winnr.fun/" ><span className='text-gradiant-green sm:text-xs'> Browse Live Contests</span></a>
                    </div>
                </div>

                    {/* <div className='relative -mt-[245px] sm:-mt-[100px] sm:h-[100px]  w-full h-[432px] flex flex-col text-center items-center justify-center overflow-hidden'>
                        <div className='absolute inset-0 bg-no-repeat bg-center bg-cover blur-sm' style={{ backgroundImage: `url(${ShadowBlack})` }}></div>

                        
                        <div className='relative z-10 flex items-center flex-col'>
                            <h1 className=' mb-4 md:mb-3 max-w-[802px] sm:max-w-[357px] sm:-mt-[92px] md:max-w-[540px]'>
                                Make the Right Picks Win Real Rewards
                            </h1>
                            <p className='mb-10 md:mb-8 max-w-[518px] md:max-w-[256px] md:leading-tight leading-7'>
                                Your instincts already follow the right tokens, trends, and memes. Now get rewarded for it.
                            </p>
                            <a className='btn btn-green' href="http://app.winnr.fun/">
                                <span className='text-gradiant-green sm:text-xs'> Browse Live Contests</span>
                            </a>
                        </div>
                    </div> */}

               

            </section>
        </>
    )
}

export default HeroSection