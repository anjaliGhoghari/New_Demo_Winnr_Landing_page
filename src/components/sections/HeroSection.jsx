import React from 'react'
import HeroImage from "../../assets/images/HeroImage.png"
import ShadowBlack from '../../assets/images/ShadowBlack.png'



function HeroSection() {
    return (
        <>
            <section className='container pb-28' >
                <div className='relative'>
                    <img
                        src={HeroImage}
                        alt="HeroImage"
                        className="md:mt-0  -mt-8 w-full"
                    />
                    <div className='-mt-[245px] absolute w-full flex flex-col text-center items-center justify-center bg-no-repeat h-[432px] sm:h-[682px] object-cover bg-center' 
                    style={{ backgroundImage: `url(${ShadowBlack})` }}>
                        <h1 className=' mb-4 md:mb-3 max-w-[802px] sm:max-w-[357px] sm:-mt-[92px] md:max-w-[540px]'>
                            Make the Right Picks Win Real Rewards
                        </h1>
                        <p className='mb-10 md:mb-8 max-w-[518px] md:max-w-[256px] md:leading-tight leading-7'>Your instincts already follow the right tokens, trends, and memes. Now get rewarded for it.</p>
                        <a className='btn btn-green' href="" ><span className='text-gradiant-green sm:text-xs'> Browse Live Contests</span></a>
                    </div>
                </div>

            </section>
        </>
    )
}

export default HeroSection