import React, { useEffect, useState } from 'react';
import { IoMdArrowRoundForward } from "react-icons/io";

function Chatbot() {
    const [show, setShow] = useState(false);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleHide = () => {
        setVisible(false);
    };

    return (
        <div className={`fixed right-6 bottom-6 md:bottom-12 z-20 flex gap-3 transition-transform duration-1000 ${show ? 'translate-x-0' : 'translate-x-[120%]'}`}>
            <div className={`bg-white shadow-lg rounded-lg p-4 w-52 sm:w-96 transition-all duration-1000 ease-in-out ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[120%]'
                }`}>
                <div className='mb-3 text-xs md:text-sm'>
                    Hi, I`m Shanay, ready to help you find the right class for you.
                    <a href='http://localhost:3000/course-recommender' className='text-xs md:text-sm underline text-blue-500 font-semibold inline-flex items-center'>
                        Try Now <IoMdArrowRoundForward />
                    </a>
                </div>
                <div className='flex justify-end'>
                    <button onClick={handleHide} className="underline px-3 pb-3 font-semibold md:text-sm text-xs">
                        Hide
                    </button>
                </div>
            </div>
            <a href="http://localhost:3000/course-recommender" className="block my-auto max-w-full">
                <img id="dibantu-logo" src="/shanaybot.png" className="h-14 md:h-16" />
            </a>
        </div>
    );
}

export default Chatbot;
