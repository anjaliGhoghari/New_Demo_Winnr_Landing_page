import React, { useState } from 'react'

import upAerrow from '../../assets/icons/arrow-down-s-line.svg'
const FAQList = [
    {
        question: 'How do I win contests on Winnr?',
        answer: 'Winners are ranked by ROI based on real-time token performance. Top-ranked users take home the prize pool.'
    },
    {
        question: 'What kinds of contests are available?',
        answer: 'Choose from token battles, portfolio drafts, IRL events like IPL or elections, and upcoming squad or narrative leagues.'
    },

    {
        question: 'What’s the entry fee and how are rewards paid?',
        answer: 'Contests usually cost $5–$50 USDC to enter. Winners receive rewards in USDC, directly to their wallet.'
    },
    {
        question: 'Can I change my picks after entering?',
        answer: 'once the contest starts, your picks are locked to ensure fairness.'
    },
    {
        question: 'What happens if my token gets rugged or delisted?',
        answer: 'We lock its ROI at the last good price or remove it. If you are affected, we’ll issue refunds.'
    },
];

function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleOpen = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    return (
        <>
            <section className='py-20 sm:py-12'>
                <div className='container'>
                    <h2 className='mb-[72px] sm:mb-7'>FAQs</h2>
                    <div>
                        {FAQList.map((item, index) => {

                            return (
                                <div key={index} className="group text-white">
                                    <div className="items-center py-11 sm:py-6 text-center border-t border-gray-900 cursor-pointer">
                                        <div className="flex justify-between" onClick={() => toggleOpen(index)}>
                                            <h4 className="tracking-[1px] text-left">
                                                {item.question}
                                            </h4>
                                            <img
                                                className={`transition-all duration-300 mr-2 sm:max-w-[16px] ${openIndex === index ? "rotate-180" : ""
                                                    }`}
                                                src={upAerrow}
                                                alt="Toggle Answer"
                                            />
                                        </div>
                                        <div
                                            className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                                                }`}
                                        >
                                            <h5 className="text-start text-gray-500 pr-2 mt-2 xs:px-0">
                                                {item.answer}
                                            </h5>
                                        </div>
                                    </div>
                                </div>

                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default FAQSection