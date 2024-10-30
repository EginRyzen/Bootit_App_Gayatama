import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function NewSlideCard({ bootcampData }) {

    const router = useRouter();

    const handleCardClick = (id) => {
        router.push(`bootcamp/detail/${id}`);
    };

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

            <div className='pt-12 mx-auto flex justify-center'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    navigation={{
                        nextEl: '#slider-button-right',
                        prevEl: '#slider-button-left',
                    }}
                    modules={[FreeMode, Pagination, Navigation]}
                    className="mySwiper py-10"
                    breakpoints={{
                        1024: { // Desktop
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                        768: { // Tablet
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        640: { // Tablet
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        0: { // Mobile
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                    }}

                >
                    {bootcampData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div onClick={() => handleCardClick(item.id)} className="max-w-sm min-h-[500px] mx-auto backdrop-blur-sm bg-white/50 rounded-lg shadow flex flex-col justify-between cursor-pointer">
                                <div>
                                    <Image width={450} height={450} className="rounded-t-lg w-full h-48 object-cover"
                                        src={item.image} loading='lazy' alt='img-card' />
                                </div>
                                <div className="p-5 flex flex-col justify-between h-full">
                                    <div>
                                        <div className="flex items-center gap-1 mb-2">
                                            <span className="inline text-sm text-[#3a3f47]">
                                                {item.teacher}
                                            </span>
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" className="svg-inline--fa fa-circle-check h-3 text-green-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                            </svg>
                                        </div>

                                        <h5 className="mb-4 text-md font-semibold tracking-tight text-[#3a3f47] group-hover:text-blue-500">
                                            {item.title.length > 30
                                                ? item.title.slice(0, 30) + '...'
                                                : item.title}
                                        </h5>
                                        <div className="flex flex-wrap">
                                            <div className="flex items-center gap-1 mb-2  text-slate-500 w-1/2">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-column" className="svg-inline--fa fa-chart-column fa-fw h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M32 32c17.7 0 32 14.3 32 32V400c0 8.8 7.2 16 16 16H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64C0 46.3 14.3 32 32 32zM160 224c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm128-64V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32zm64 32c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32zM480 96V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.7 14.3-32 32-32s32 14.3 32 32z" /></svg>
                                                <span className="inline text-sm">
                                                    {item.level}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-1 mb-2  text-slate-500 w-1/2">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="clock" className="svg-inline--fa fa-clock h-3 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg>
                                                <span className="inline text-sm">
                                                    {item.time}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-1 mb-2  text-slate-500 w-1/2">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="users" className="svg-inline--fa fa-users h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" /></svg>
                                                <span className="inline text-sm">
                                                    {item.students}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-1 mb-2  text-slate-500 w-1/2">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="swatchbook" className="svg-inline--fa fa-swatchbook h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 32C0 14.3 14.3 0 32 0H160c17.7 0 32 14.3 32 32V416c0 53-43 96-96 96s-96-43-96-96V32zM223.6 425.9c.3-3.3 .4-6.6 .4-9.9V154l75.4-75.4c12.5-12.5 32.8-12.5 45.3 0l90.5 90.5c12.5 12.5 12.5 32.8 0 45.3L223.6 425.9zM182.8 512l192-192H480c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32H182.8zM128 64H64v64h64V64zM64 192v64h64V192H64zM96 440a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" /></svg>
                                                <span className="inline text-sm">
                                                    {item.module}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-2">
                                        <div className="text-orange-500 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star-half-stroke" className="inline fa-star-half-stroke me-1 h-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                <path fill="currentColor" d="M288 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L288.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L288.1 439.8 159.8 508.3C149 514 135.9 513.1 126 506s-14.9-19.3-12.9-31.3L137.8 329 33.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L195 150.3 259.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L438.5 329l24.6 145.7z" />
                                            </svg>
                                            <span className="text-md">{item.rating}</span>
                                        </div>
                                        <span className="ms-1 text-[#3a3f47]"><small>({item.totalRating}) Evaluation</small></span>
                                    </div>
                                </div>
                                <hr className="bg-black" />
                                <div className="w-full p-5">
                                    <table className="w-full">
                                        <tbody>
                                            <tr>
                                                <td className="text-left text-xs">Buy</td>
                                                <td className="text-right text-xs">Rp. <span>{item.buy}</span></td>
                                            </tr>
                                            <tr>
                                                <td className="text-left text-xs">Rent</td>
                                                <td className="text-right text-xs">Rp. <span>{item.rent}</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default NewSlideCard;
