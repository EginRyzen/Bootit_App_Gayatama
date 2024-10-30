"use client"
import React, { useState } from "react";
// import Slider from "react-slick";
import dynamic from 'next/dynamic';
import Banner from "./banner/banner";
import LearningPath from "./section/learningpath";
import SlideLogo from "./slide/slidelogo";
import About from "./section/about";
import SlideCard from "./slide/slidecard";
import NewSlideCard from "./slide/newslidecard";
import Questions from "./section/questioons";
import Join from "./banner/join";
import Chatbot from "./components/chatbot";
import { bootcampData } from "../bootcamp/data";

function HomePage() {
    const Slider = dynamic(() => import("react-slick"), { ssr: false });

    const settings = {
        dots: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,  // Menggunakan custom next arrow
        prevArrow: <SamplePrevArrow />,   // Menggunakan custom prev arrow
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    nextArrow: null,  // Menghilangkan tombol next
                    prevArrow: null,  // Menghilangkan tombol prev
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: null,  // Menghilangkan tombol next
                    prevArrow: null,  // Menghilangkan tombol prev
                }
            }
        ]

    };

    // Menyimpan index accordion yang terbuka
    const [openIndex, setOpenIndex] = useState(1);

    const toggleAccordion = (index) => {
        // Menutup jika sudah terbuka, membuka jika belum
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <main>
                <div className="fixed flex top-0 -z-10 h-full w-full bg-white">
                    {/* Warna Ungu */}
                    <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>

                    {/* Warna Merah */}
                    <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] translate-x-[10%] translate-y-[50%] rounded-full bg-[rgba(244,109,109,0.5)] opacity-50 blur-[80px]"></div>

                    {/* Warna Biru */}
                    <div className="absolute bottom-auto left-0 top-0 h-[500px] w-[500px] translate-x-[10%] translate-y-[20%] rounded-full bg-[rgba(95,164,242,0.5)] opacity-50 blur-[80px]"></div>
                </div>
                {/* Banner */}
                <Banner />

                {/* section */}
                <LearningPath />

                {/* SlideShow */}
                <SlideLogo />

                {/* About Boot.IT */}
                <About />

                {/* Slide Card */}
                {/* <SlideCard settings={settings} Slider={Slider} bootcampData={bootcampData} /> */}
                <NewSlideCard bootcampData={bootcampData} />

                {/* Question */}
                <Questions toggleAccordion={toggleAccordion} openIndex={openIndex} />


                {/* Let`s Join */}
                <Join />

                {/* Chat Bot */}
                <Chatbot />


            </main>
        </>
    );
}

export default HomePage


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#adb3af", }}  // Ubah warna di sini
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#adb3af" }}  // Ubah warna di sini
            onClick={onClick}
        />
    );
}