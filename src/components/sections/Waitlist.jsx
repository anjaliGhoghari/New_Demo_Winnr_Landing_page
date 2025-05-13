import React from 'react'

function Waitlist() {
    return (
        <>
            <section className='container py-20 sm:py-12'>
                <div className="relative rounded-3xl"
                    style={{ background: `linear-gradient(180deg, #5EFB7E 0%, #ADFA3C 100%)`, }}>
                    <div className='p-12 flex justify-between gap-10 items-center md:flex-col sm:p-7'>
                        <div>
                            <h3 className='leading-tight mb-3 md:mb-1'>Get Early Access
                                to the Game Layer of Crypto</h3>
                            <h5 className='max-w-[445px] md:mb-4'>
                                Join the waitlist to compete, earn, and shape the future of attention-based rewards.
                            </h5>
                        </div>
                        
                            <div className=" bg-[#75CF49] rounded-2xl items-center flex pr-2 py-2 sm:py-1 w-full max-w-[800px]">
                                <input
                                    type="email"
                                    placeholder="Enter your email to join"
                                    className="bg-transparent outline-none flex-grow px-4 w-full pr-[160px] py-2 text-[#2C6043] font-medium text-base leading-9 placeholder-[#2C6043]"
                                />

                                <button className="absolute right-14 sm:right-10">
                                    <a className='btn btn-black mb-10 
                                ' href='https://www.winnr.fun/waitlist'>Join Waitlist</a>
                                </button>
                            </div>
                        
                    </div>

                </div>

            </section>
        </>
    )
}

export default Waitlist