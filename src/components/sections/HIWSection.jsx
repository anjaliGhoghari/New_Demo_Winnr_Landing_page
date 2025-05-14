import React, { useRef, useState } from 'react'
import Slider from "react-slick";
import HIWCard1 from '../../assets/images/HIWCard1.png'
import HIWCard2 from '../../assets/images/HIWCard2.png'
import HIWCard3 from '../../assets/images/HIWCard3.png'
import HIWCard4 from '../../assets/images/HIWCard4.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const CardList = [
  {
    image: HIWCard1,
    gradiant: 'linear-gradient(180deg, #4B7802 0%, #003A68 100%)',
    title: 'Choose a Contest',
    description: 'Select from tokens, ecosystems, memes, or real-world events.'
  },
  {
    image: HIWCard2,
    gradiant: 'linear-gradient(180deg, #006849 0%, #78026C 100%)',
    title: 'Draft Your Picks',
    description: 'Allocate 100,000 in-game credits based on your conviction.'
  },
  {
    image: HIWCard4,
    gradiant: 'linear-gradient(180deg, #10171D 0%, #024D78 100%)',
    title: 'Win USDC',
    description: 'Top performers take home real rewards.'
  },
  {
    image: HIWCard3,
    gradiant: 'linear-gradient(180deg, #006849 0%, #000 100%)',
    title: 'Track ROI Live',
    description: 'We calculate returns based on real-time token performance.'
  }
];

function HIWSection() {
  const [activeArrow, setActiveArrow] = useState(null);
  const isActive = activeArrow === 'prev';

  const PrevArrow = ({ onClick }) => (

    <button
      className={`w-8 h-8 rounded-[9px] sm:rounded-[5px] flex items-center justify-center shadow-md transition-colors duration-100 
          ${isActive ? 'bg-[#5EFB7E]' : 'bg-darkGreen'
        }`}
      onClick={() => {
        setActiveArrow('prev');
        onClick();
      }}
      aria-label="Previous Slide"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <path
          d="M15.7707 16.0011L19.5427 19.7718L17.6573 21.6584L12 16.0011L17.6573 10.3438L19.5427 12.2304L15.7707 16.0011Z"
          fill={isActive ? '#00220d' : '#5EFB7E'}
        />
      </svg>
    </button>
  );

  const NextArrow = ({ onClick }) => {
    const isActive = activeArrow === 'next';

    return (
      <button
        className={`w-8 h-8  rounded-[9px] sm:rounded-[5px] flex items-center justify-center shadow-md transition-colors duration-200 ${isActive ? 'bg-[#5EFB7E]' : 'bg-darkGreen'}`}
        onClick={() => {
          setActiveArrow('next');
          onClick();
        }}
      >
        <svg

          width="32"
          height="32"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <path
            d="M16.229 16.0011L12.457 12.2304L14.3424 10.3438L19.9997 16.0011L14.3424 21.6584L12.457 19.7718L16.229 16.0011Z"
            fill={isActive ? '#00220d' : '#5EFB7E'}
          />
        </svg>
      </button>
    );
  };
  const sliderRef = useRef();
  const settings = {
    className: "slider variable-width",
    centerMode: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    dots: true,
    arrows: false,
    variableWidth: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 678,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
        }
      }
    ]
  }

  return (
    <>
      <section className='container' id='how-it-works'>
        <div className=' py-28 md:py-12'>
          <div className='flex justify-between items-baseline text-center'>
            <div className='flex flex-col items-start align-top gap-2'>
              <h2>How it works</h2>
              <p>Play on Conviction, Not Charts.</p>
              </div>
         

          <div className='flex items-baseline border border-darkGreen p-2 rounded-[14px] gap-2 '>
            <PrevArrow onClick={() => sliderRef.current?.slickPrev()} />
            <NextArrow onClick={() => sliderRef.current?.slickNext()} />
          </div>
          </div>
       
        <div>

          <div className='slider-container'>
            <Slider ref={sliderRef} {...settings} className="mt-16 sm:mt-8">
              {CardList.map((item, index) => (
                <div key={index} className="pr-8 sm:pr-3 w-[300px]">
                  <div className="rounded-[32px] sm:rounded-3xl overflow-hidden h-[478px] flex flex-col justify-between sm:w-[150px] sm:h-[284px] sm:min-w-[240px]" style={{ background: item.gradiant }}>
                    <div className="pt-12 px-12 sm:pt-7 sm:px-7">
                      <h5 className='text-white mb-2'>{item.title}</h5>
                      <p className="text-[#a9a8a8] max-w-[287px] sm:max-w-[167px] mb-5 sm:leading-none leading-1">{item.description}</p>
                    </div>
                    <div className="flex items-end">
                      <img className="w-full" src={item.image} alt={item.title} />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        </div>
      </section>
    </>
  )
}
export default HIWSection
