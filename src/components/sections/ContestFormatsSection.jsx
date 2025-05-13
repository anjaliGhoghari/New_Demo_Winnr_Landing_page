import React from 'react'
import contestFormatsSectionMP4 from '../../assets/video/contestFormatsSectionMP4.mp4'


function ContestFormatsSection() {
    return (
        <>
            <section className='container'>
                <div className='py-20 sm:py-12'>
                    <div className='flex flex-col'>
                        <h2 className='sm:mb-2'>Contest formats</h2>
                        <p className=''>High Tempo, High Stakes. Always Fresh.</p>
                    </div>
                    <div> <video className=' w-full h-full' autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        disablePictureInPicture
                        controls={false} >
                        <source src={contestFormatsSectionMP4} type="video/mp4" />
                    </video>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContestFormatsSection