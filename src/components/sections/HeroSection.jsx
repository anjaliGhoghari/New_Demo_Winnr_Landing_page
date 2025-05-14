import React from 'react'
import HeroImage from "../../assets/images/HeroImage.png"



function HeroSection() {
    return (
        <>
            <section className='container pb-20 md:pb-10' id='hero-section' >
                <div className='relative'>
                    <img
                        src={HeroImage}
                        alt="HeroImage"
                        className="md:mt-0 -mt-10 w-full"
                    />
                    <div
                        className="flex items-center flex-col text-center text-white relative bg-[#060B0F] mt-[calc(-70px-5vw)] sm:mt-[calc(-12px-5vw)] rounded-xl max-w-[90%] h-auto md:max-w-[80%] mx-auto "
                        style={{boxShadow: '0px clamp(-80px, -10vw, -70px) 60px #060B0F'}}
                    >
                        <h1 className="mb-4 md:mb-3 max-w-[802px] sm:max-w-[357px]  md:max-w-[540px]">
                            Make the Right Picks Win Real Rewards
                        </h1>
                        <p className="mb-10 md:mb-8 max-w-[518px] md:max-w-[256px] md:leading-tight leading-7">
                            Your instincts already follow the right tokens, trends, and memes. Now get rewarded for it.
                        </p>
                        <a className="btn btn-green" href="http://app.winnr.fun/">
                            <span className="text-gradiant-green sm:text-xs">Browse Live Contests</span>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection