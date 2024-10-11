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
        <div className="fixed right-6 bottom-6 z-20">
            <a href="http://localhost:3000/course-recommender" className="block my-auto max-w-full">
                <img id="dibantu-logo" src="/shanaybot.png" className="h-16" />
            </a>
        </div>
    );
}

export default Chatbot;
