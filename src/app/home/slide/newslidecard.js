import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';

function NewSlideCard() {
    return (
        <div className="max-w-6xl mx-auto relative overflow-hidden px-4 sm:px-6 lg:px-8 py-10">
            <div className="text-3xl mb-5 ml-2 font-semibold text-[#3a3f47]">Other Popular Class</div>

            {/* Button di kanan atas */}
            <div className="absolute top-[75px] right-8 flex space-x-4 mt-2 mr-2">
                <button id="slider-button-left" className="swiper-button-prev group !p-2 flex justify-center items-center border border-solid border-indigo-600 !w-12 !h-12 transition-all duration-500 rounded-full hover:bg-indigo-600" data-carousel-prev>
                    <svg className="h-5 w-5 text-indigo-600 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                        <path d="M10.0002 11.9999L6 7.99971L10.0025 3.99719" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <button id="slider-button-right" className="swiper-button-next group !p-2 flex justify-center items-center border border-solid border-indigo-600 !w-12 !h-12 transition-all duration-500 rounded-full hover:bg-indigo-600" data-carousel-next>
                    <svg className="h-5 w-5 text-indigo-600 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                        <path d="M5.99984 4.00012L10 8.00029L5.99748 12.0028" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

            <div className='pt-12'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={{
                        nextEl: '#slider-button-right',
                        prevEl: '#slider-button-left',
                    }}
                    modules={[FreeMode, Pagination, Navigation]}
                    className="mySwiper py-10"
                    breakpoints={{
                        1024: { // Desktop
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        768: { // Tablet
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        0: { // Mobile
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                    }}

                >
                    {[1, 2, 3, 4, 5].map((index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
                                <span className="text-2xl font-semibold text-indigo-600">Slide {index}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default NewSlideCard;
