import React from 'react'
import RightCard from '../../assets/images/RightCard.png'
import leftCard from '../../assets/images/leftCard.png'
import addUser from '../../assets/icons/user-add-fill.svg'
import dvdFill from '../../assets/icons/dvd-fill.svg'
import ghostSmile from '../../assets/icons/ghost-smile-fill.svg'
import earn from '../../assets/icons/earn.svg'
import leader from '../../assets/icons/leader.svg'
import rewards from '../../assets/icons/rewards.svg'
import live from '../../assets/icons/live.svg'

function WinnXBotSection() {
    return (
        <>
            <section className='container py-20 sm:py-12'>
                <div className='flex gap-8 sm:flex-col sm:gap-4'>
                    <div
                        className=" basis-1/2  rounded-[32px] sm:rounded-3xl"
                        style={{ background: `linear-gradient(180deg, #5EFB7E 0%, #ADFA3C 100%)`, }}>
                     <div className=' pt-12 px-12 sm:pt-7 sm:px-7' >
                            <div className='flex gap-1'>
                                <h3 className=''>
                                    Winnr X Bot</h3>
                                <img className='sm:max-w-[18px]' src={ghostSmile} />
                            </div>
                            <h5 >Challenge Friends on X/Twitter</h5>
                        </div>
                        <div className='flex justify-center'>
                            <img className='w-[90%] ' src={leftCard}></img>
                        </div>
                        <div className='flex gap-3 flex-col -mt-3 mx-12 mb-12 sm:gap-[2px] sm:mx-7 sm:mt-2 sm:mb-8 '>
                            <div className='flex gap-1'>
                                <img src={live} className='sm:max-w-[16px]' />
                                <h5 className='font-semibold '>The bot creates a live contest</h5>
                            </div>
                            <div className='flex gap-1'>
                                <img src={leader} className='sm:max-w-[16px]' />
                                <h5 className='font-semibold'>Auto leaderboard in the thread</h5>
                            </div>
                            <div className='flex gap-1'>
                                <img src={rewards} className='sm:max-w-[16px]' />
                                <h5 className='font-semibold'>Rewards are distributed after the results</h5>
                            </div>
                        </div>
                    </div>
                    <div
                                className=" basis-1/2  rounded-[32px] sm:rounded-3xl]"
                                style={{ background: 'linear-gradient(0deg, #00FED0 0%, #01A8ED 100%)' }}>
                                <div className='pt-12 px-12 sm:pt-7 sm:px-7'>
                                <h3>
                                    Invite & Earn
                                </h3>
                                    <h5 className='sm:mb-2'>Get Paid to Bring Winners</h5></div>
                                <div className='flex justify-center'>
                                    <img className='w-[90%] ' src={RightCard}></img>
                                </div>
                                <div className='flex gap-3 sm:gap-[2px] flex-col sm:mx-7 sm:mt-2 mt-10 sm:mb-8 mx-12'>
                                    <div className='flex gap-1'>
                                        <img src={addUser} className='sm:max-w-[16px]'/>
                                        <h5 className='font-semibold'>Invite friends to contests</h5>
                                    </div>
                                    <div className='flex gap-1'>
                                        <img src={earn} className='sm:max-w-[16px]'/>
                                        <h5 className='font-semibold'>You earn 10% more credits</h5>
                                    </div>
                                    <div className='flex gap-1'>
                                        <img src={dvdFill} className='sm:max-w-[16px]'/>
                                        <h5 className='font-semibold'>They get a 5% boost too</h5>
                                    </div>
                                </div>
                            </div>
                </div>
            </section>
        </>
    )
}

export default WinnXBotSection