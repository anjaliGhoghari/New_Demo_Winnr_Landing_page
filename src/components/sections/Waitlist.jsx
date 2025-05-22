import React from 'react'

function Waitlist() {
    return (
        <>
            <section className='py-20 sm:py-12'>
                <div className='container'>
                    <div className="relative rounded-3xl"
                        style={{ background: `linear-gradient(180deg, #5EFB7E 0%, #ADFA3C 100%)`, }}>
                        <div className='p-12 flex gap-14 items-center lg:items-start lg:flex-col sm:p-7'>
                            <div className=''>
                                <h3 className='leading-tight max-w-[550px] mb-3 md:mb-1'>Get Early Access <br /> to the Game Layer of Crypto</h3>
                                <h5 className='max-w-[445px] md:mb-4 text-[#060B0F]'>
                                    Join the waitlist to compete, earn, and shape the future of attention-based rewards.
                                </h5>
                            </div>
                            <div className=" basis-[53%] bg-[#75CF49] rounded-2xl items-center flex pr-2 py-2 sm:py-1 w-full ">
                                <input
                                    type="email"
                                    name='email'
                                    required
                                    placeholder="Enter your email to join"
                                    className="bg-transparent outline-none flex-grow px-4 w-full pr-[160px] py-2 text-[#2C6043] font-medium text-base leading-9 placeholder-[#2C6043]"
                                />
                                <button className="absolute right-16 sm:right-14">
                                    <a className='btn btn-black mb-10 
                                ' href='https://www.winnr.fun/waitlist'>Join Waitlist</a>
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Waitlist