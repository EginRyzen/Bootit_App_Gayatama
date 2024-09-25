"use client"
import React from "react";
// import Slider from "react-slick";
import dynamic from 'next/dynamic';

export default function Home() {
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  };

  return (
    <>
      <main>
        {/* Banner */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-12 gap-3 justify-between">
            <div className="flex flex-col w-[50%] my-10 px-10">
              <div className="text-3xl font-normal text-[#3a3f47]">
                Bangun Karirmu Sebagai Developer Profesional
              </div>
              <p className="text-sm font-light text-[#3a3f47] my-4">
                Mulai belajar terarah dengan learning path
              </p>
              <div className="mt-10">
                <button
                  type="button"
                  className="text-white bg-[#3a3f47] hover:text-white border border-[#3a3f47] focus:ring-4 focus:outline-none focus:ring-gray-300 font-bold rounded-sm text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-[#3a3f47] dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 transition-all duration-500 ease-in-out"
                >
                  Belajar Sekarang
                </button>
              </div>
            </div>
            <div className="w-[50%]">
              <div className="w-full">
                <img src="homepage-hero.png" />
              </div>
            </div>
          </div>
        </div>

        {/* section */}
        <div className="w-full bg-[#e6e6e6] my-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="text-center text-3xl font-normal text-[#3a3f47]">
              Learning Path
            </div>
            <p className="text-center text-sm font-light text-[#3a3f47] my-4 w-1/2 mx-auto">
              Learning path akan membantu Anda dalam belajar di Academy dengan kurikulum yang dibangun bersama pelaku industri ternama.
            </p>
          </div>
        </div>

        {/* SlideShow */}
        <div className="flex overflow-hidden space-x-16 group pt-10 pb-20">
          <div className="flex space-x-32 animate-loop-scroll group-hover:paused">
            <img loading="lazy" src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/homepage-partner-google.png" className="h-16 max-w-none cursor-pointer" alt="Image 1" />
            <img loading="lazy" src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/homepage-partner-microsoft.png" className="h-16 max-w-none cursor-pointer" alt="Image 1" />
            <img loading="lazy" src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/homepage-partner-aws.png" className="h-16 max-w-none cursor-pointer" alt="Image 1" />
            <img loading="lazy" src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/homepage-partner-google.png" className="h-16 max-w-none cursor-pointer" alt="Image 1" />
            <img loading="lazy" src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/homepage-partner-microsoft.png" className="h-16 max-w-none cursor-pointer" alt="Image 1" />
            <img loading="lazy" src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/homepage-partner-aws.png" className="h-16 max-w-none cursor-pointer" alt="Image 1" />
          </div>

          <div className="flex space-x-32 animate-loop-scroll group-hover:paused" aria-hidden="true">
            <img loading="lazy" src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/homepage-partner-google.png" className="h-16 max-w-none cursor-pointer" alt="Image 1" />
            <img loading="lazy" src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/homepage-partner-microsoft.png" className="h-16 max-w-none cursor-pointer" alt="Image 1" />
            <img loading="lazy" src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/homepage-partner-aws.png" className="h-16 max-w-none cursor-pointer" alt="Image 1" />
            <img loading="lazy" src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/homepage-partner-google.png" className="h-16 max-w-none cursor-pointer" alt="Image 1" />
            <img loading="lazy" src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/homepage-partner-microsoft.png" className="h-16 max-w-none cursor-pointer" alt="Image 1" />
            <img loading="lazy" src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/homepage-partner-aws.png" className="h-16 max-w-none cursor-pointer" alt="Image 1" />
          </div>
        </div>

        {/* About Boot.IT */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="w-full flex justify-between items-center">
            <div className="w-1/2 px-10">
              <div className="text-3xl font-normal text-[#3a3f47]">Event Bootcamp</div>
              <p className="my-5 text-start font-sm text-[#3a3f47] text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div className="w-1/2 px-10 me-10">
              <div className="w-full">
                <img src="https://d168wuuhrgvlrj.cloudfront.net/cloudfront/templates/v1/landing/free%202_11zon.png" className="float-end" />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="w-1/2 px-10 ms-10">
              <div className="w-full">
                <img src="https://d168wuuhrgvlrj.cloudfront.net/cloudfront/templates/v1/landing/free%203_11zon.png" className="float-start" />
              </div>
            </div>
            <div className="w-1/2 px-10">
              <div className="text-3xl text-end font-normal text-[#3a3f47]">Event Meet Up</div>
              <p className="my-5 text-start font-sm text-[#3a3f47] text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="w-1/2 px-10">
              <div className="text-3xl font-normal text-[#3a3f47]">Event Competition</div>
              <p className="my-5 text-start font-sm text-[#3a3f47] text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s,
              </p>
            </div>
            <div className="w-1/2 px-10 me-10">
              <div className="w-full">
                <img src="https://d168wuuhrgvlrj.cloudfront.net/cloudfront/templates/v1/landing/free%202_11zon.png" className="float-end" />
              </div>
            </div>
          </div>
        </div>

        {/* Slide Card */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="text-3xl mb-5 ml-2 font-semibold text-[#3a3f47]">Rekomendasi Kelas Online</div>
          <div className="slider-container">
            <Slider {...settings}>
              <div className="px-2">
                <div className="group max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow">
                  <a href="#">
                    <img className="rounded-t-lg" src="https://image.web.id/images/Belajar-Pemrograman-PHP8da6d6ee0391ee00.png" alt />
                  </a>
                  <div className="p-5">
                    <div className="flex items-center gap-1">
                      <span className="inline text-sm text-[#3a3f47]">
                        Egin Sefiano Widodo
                      </span>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" className="svg-inline--fa fa-circle-check h-3 text-green-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                    </div>
                    <h5 className="mb-4 text-lg font-semibold tracking-tight text-[#3a3f47] group-hover:text-blue-500">
                      Belajar Pemrograman PHP
                    </h5>
                    <div className="flex flex-wrap">
                      <div className="flex items-center gap-1 mb-2  text-[#717884] w-1/2">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-column" className="svg-inline--fa fa-chart-column fa-fw h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M32 32c17.7 0 32 14.3 32 32V400c0 8.8 7.2 16 16 16H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64C0 46.3 14.3 32 32 32zM160 224c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm128-64V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32zm64 32c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32zM480 96V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.7 14.3-32 32-32s32 14.3 32 32z" /></svg>
                        <span className="inline text-sm">
                          Beginer
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mb-2  text-[#717884] w-1/2">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="clock" className="svg-inline--fa fa-clock h-3 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg>
                        <span className="inline text-sm">
                          4 jam
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mb-2  text-[#717884] w-1/2">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="users" className="svg-inline--fa fa-users h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" /></svg>
                        <span className="inline text-sm">
                          3292 Siswa
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mb-2  text-[#717884] w-1/2">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="swatchbook" className="svg-inline--fa fa-swatchbook h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 32C0 14.3 14.3 0 32 0H160c17.7 0 32 14.3 32 32V416c0 53-43 96-96 96s-96-43-96-96V32zM223.6 425.9c.3-3.3 .4-6.6 .4-9.9V154l75.4-75.4c12.5-12.5 32.8-12.5 45.3 0l90.5 90.5c12.5 12.5 12.5 32.8 0 45.3L223.6 425.9zM182.8 512l192-192H480c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32H182.8zM128 64H64v64h64V64zM64 192v64h64V192H64zM96 440a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" /></svg>
                        <span className="inline text-sm">
                          42 Modul
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center mt-2">
                      <div className="text-orange-500 flex items-center">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star-half-stroke" className="inline fa-star-half-stroke me-1 h-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M288 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L288.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L288.1 439.8 159.8 508.3C149 514 135.9 513.1 126 506s-14.9-19.3-12.9-31.3L137.8 329 33.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L195 150.3 259.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L438.5 329l24.6 145.7z" />
                        </svg>
                        <span className="text-md">4.7</span>
                      </div>
                      <span class="ms-1 text-[#3a3f47]"><small>(338) Penilaian</small></span>
                    </div>
                  </div>
                  <hr className="bg-black" />
                  <div className="w-full p-5">
                    <table className="w-full">
                      <tr>
                        <td className="text-left text-sm">Beli</td>
                        <td className="text-right text-sm">Rp. <span>150.000</span></td>
                      </tr>
                      <tr>
                        <td className="text-left text-sm">Sewa</td>
                        <td className="text-right text-sm">Rp. <span>150.000</span></td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              <div className="px-2">
                <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow">
                  <a href="#">
                    <img className="rounded-t-lg" src="https://image.web.id/images/Belajar-Pemrograman-PHP8da6d6ee0391ee00.png" alt />
                  </a>
                  <div className="p-5">
                    <div className="flex items-center gap-1">
                      <span className="inline text-sm text-[#3a3f47]">
                        Egin Sefiano Widodo
                      </span>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" className="svg-inline--fa fa-circle-check h-3 text-green-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                    </div>
                    <a href="#">
                      <h5 className="mb-4 text-lg  font-semibold tracking-tight text-[#3a3f47]">Belajar Pemrograman PHP</h5>
                    </a>
                    <div className="flex flex-wrap">
                      <div className="flex items-center gap-1 mb-2  text-[#717884] w-1/2">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-column" className="svg-inline--fa fa-chart-column fa-fw h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M32 32c17.7 0 32 14.3 32 32V400c0 8.8 7.2 16 16 16H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64C0 46.3 14.3 32 32 32zM160 224c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm128-64V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32zm64 32c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32zM480 96V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.7 14.3-32 32-32s32 14.3 32 32z" /></svg>
                        <span className="inline text-sm">
                          Beginer
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mb-2  text-[#717884] w-1/2">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="clock" className="svg-inline--fa fa-clock h-3 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg>
                        <span className="inline text-sm">
                          4 jam
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mb-2  text-[#717884] w-1/2">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="users" className="svg-inline--fa fa-users h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" /></svg>
                        <span className="inline text-sm">
                          3292 Siswa
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mb-2  text-[#717884] w-1/2">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="swatchbook" className="svg-inline--fa fa-swatchbook h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 32C0 14.3 14.3 0 32 0H160c17.7 0 32 14.3 32 32V416c0 53-43 96-96 96s-96-43-96-96V32zM223.6 425.9c.3-3.3 .4-6.6 .4-9.9V154l75.4-75.4c12.5-12.5 32.8-12.5 45.3 0l90.5 90.5c12.5 12.5 12.5 32.8 0 45.3L223.6 425.9zM182.8 512l192-192H480c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32H182.8zM128 64H64v64h64V64zM64 192v64h64V192H64zM96 440a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" /></svg>
                        <span className="inline text-sm">
                          42 Modul
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center mt-2">
                      <div className="text-orange-500 flex items-center">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star-half-stroke" className="inline fa-star-half-stroke me-1 h-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M288 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L288.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L288.1 439.8 159.8 508.3C149 514 135.9 513.1 126 506s-14.9-19.3-12.9-31.3L137.8 329 33.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L195 150.3 259.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L438.5 329l24.6 145.7z" />
                        </svg>
                        <span className="text-md">4.7</span>
                      </div>
                      <span class="ms-1 text-[#3a3f47]"><small>(338) Penilaian</small></span>
                    </div>
                  </div>
                  <hr className="bg-black" />
                  <div className="w-full p-5">
                    <table className="w-full">
                      <tr>
                        <td className="text-left text-sm">Beli</td>
                        <td className="text-right text-sm">Rp. <span>150.000</span></td>
                      </tr>
                      <tr>
                        <td className="text-left text-sm">Sewa</td>
                        <td className="text-right text-sm">Rp. <span>150.000</span></td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              <div className="px-2">
                <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow">
                  <a href="#">
                    <img className="rounded-t-lg" src="https://image.web.id/images/Belajar-Pemrograman-PHP8da6d6ee0391ee00.png" alt />
                  </a>
                  <div className="p-5">
                    <div className="flex items-center gap-1">
                      <span className="inline text-sm text-[#3a3f47]">
                        Egin Sefiano Widodo
                      </span>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" className="svg-inline--fa fa-circle-check h-3 text-green-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                    </div>
                    <a href="#">
                      <h5 className="mb-4 text-lg  font-semibold tracking-tight text-[#3a3f47]">Belajar Pemrograman PHP</h5>
                    </a>
                    <div className="flex flex-wrap">
                      <div className="flex items-center gap-1 mb-2  text-[#717884] w-1/2">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-column" className="svg-inline--fa fa-chart-column fa-fw h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M32 32c17.7 0 32 14.3 32 32V400c0 8.8 7.2 16 16 16H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64C0 46.3 14.3 32 32 32zM160 224c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm128-64V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32zm64 32c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32zM480 96V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.7 14.3-32 32-32s32 14.3 32 32z" /></svg>
                        <span className="inline text-sm">
                          Beginer
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mb-2  text-[#717884] w-1/2">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="clock" className="svg-inline--fa fa-clock h-3 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg>
                        <span className="inline text-sm">
                          4 jam
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mb-2  text-[#717884] w-1/2">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="users" className="svg-inline--fa fa-users h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" /></svg>
                        <span className="inline text-sm">
                          3292 Siswa
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mb-2  text-[#717884] w-1/2">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="swatchbook" className="svg-inline--fa fa-swatchbook h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 32C0 14.3 14.3 0 32 0H160c17.7 0 32 14.3 32 32V416c0 53-43 96-96 96s-96-43-96-96V32zM223.6 425.9c.3-3.3 .4-6.6 .4-9.9V154l75.4-75.4c12.5-12.5 32.8-12.5 45.3 0l90.5 90.5c12.5 12.5 12.5 32.8 0 45.3L223.6 425.9zM182.8 512l192-192H480c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32H182.8zM128 64H64v64h64V64zM64 192v64h64V192H64zM96 440a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" /></svg>
                        <span className="inline text-sm">
                          42 Modul
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center mt-2">
                      <div className="text-orange-500 flex items-center">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star-half-stroke" className="inline fa-star-half-stroke me-1 h-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M288 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L288.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L288.1 439.8 159.8 508.3C149 514 135.9 513.1 126 506s-14.9-19.3-12.9-31.3L137.8 329 33.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L195 150.3 259.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L438.5 329l24.6 145.7z" />
                        </svg>
                        <span className="text-md">4.7</span>
                      </div>
                      <span class="ms-1 text-[#3a3f47]"><small>(338) Penilaian</small></span>
                    </div>
                  </div>
                  <hr className="bg-black" />
                  <div className="w-full p-5">
                    <table className="w-full">
                      <tr>
                        <td className="text-left text-sm">Beli</td>
                        <td className="text-right text-sm">Rp. <span>150.000</span></td>
                      </tr>
                      <tr>
                        <td className="text-left text-sm">Sewa</td>
                        <td className="text-right text-sm">Rp. <span>150.000</span></td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              <div className="px-2">
                <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow">
                  <a href="#">
                    <img className="rounded-t-lg" src="https://image.web.id/images/Belajar-Pemrograman-PHP8da6d6ee0391ee00.png" alt />
                  </a>
                  <div className="p-5">
                    <div className="flex items-center gap-1">
                      <span className="inline text-sm text-[#3a3f47]">
                        Egin Sefiano Widodo
                      </span>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" className="svg-inline--fa fa-circle-check h-3 text-green-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                    </div>
                    <a href="#">
                      <h5 className="mb-4 text-lg  font-semibold tracking-tight text-[#3a3f47]">Belajar Pemrograman PHP</h5>
                    </a>
                    <div className="flex flex-wrap">
                      <div className="flex items-center gap-1 mb-2  text-[#717884] w-1/2">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-column" className="svg-inline--fa fa-chart-column fa-fw h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M32 32c17.7 0 32 14.3 32 32V400c0 8.8 7.2 16 16 16H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64C0 46.3 14.3 32 32 32zM160 224c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm128-64V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32zm64 32c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32zM480 96V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.7 14.3-32 32-32s32 14.3 32 32z" /></svg>
                        <span className="inline text-sm">
                          Beginer
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mb-2  text-[#717884] w-1/2">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="clock" className="svg-inline--fa fa-clock h-3 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg>
                        <span className="inline text-sm">
                          4 jam
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mb-2  text-[#717884] w-1/2">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="users" className="svg-inline--fa fa-users h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" /></svg>
                        <span className="inline text-sm">
                          3292 Siswa
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mb-2  text-[#717884] w-1/2">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="swatchbook" className="svg-inline--fa fa-swatchbook h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 32C0 14.3 14.3 0 32 0H160c17.7 0 32 14.3 32 32V416c0 53-43 96-96 96s-96-43-96-96V32zM223.6 425.9c.3-3.3 .4-6.6 .4-9.9V154l75.4-75.4c12.5-12.5 32.8-12.5 45.3 0l90.5 90.5c12.5 12.5 12.5 32.8 0 45.3L223.6 425.9zM182.8 512l192-192H480c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32H182.8zM128 64H64v64h64V64zM64 192v64h64V192H64zM96 440a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" /></svg>
                        <span className="inline text-sm">
                          42 Modul
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center mt-2">
                      <div className="text-orange-500 flex items-center">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star-half-stroke" className="inline fa-star-half-stroke me-1 h-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M288 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L288.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L288.1 439.8 159.8 508.3C149 514 135.9 513.1 126 506s-14.9-19.3-12.9-31.3L137.8 329 33.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L195 150.3 259.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L438.5 329l24.6 145.7z" />
                        </svg>
                        <span className="text-md">4.7</span>
                      </div>
                      <span class="ms-1 text-[#3a3f47]"><small>(338) Penilaian</small></span>
                    </div>
                  </div>
                  <hr className="bg-black" />
                  <div className="w-full p-5">
                    <table className="w-full">
                      <tr>
                        <td className="text-left text-sm">Beli</td>
                        <td className="text-right text-sm">Rp. <span>150.000</span></td>
                      </tr>
                      <tr>
                        <td className="text-left text-sm">Sewa</td>
                        <td className="text-right text-sm">Rp. <span>150.000</span></td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>

              <div className="px-2">
                <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow">
                  <a href="#">
                    <img className="rounded-t-lg" src="https://image.web.id/images/Belajar-Cepat-Vue.jsa0b9a92b697c3564.png" alt />
                  </a>
                  <div className="p-5">
                    <div className="flex items-center gap-1">
                      <span className="inline text-sm text-[#3a3f47]">
                        Egin Sefiano Widodo
                      </span>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" className="svg-inline--fa fa-circle-check h-3 text-green-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                    </div>
                    <a href="#">
                      <h5 className="mb-4 text-lg  font-semibold tracking-tight text-[#3a3f47]">Belajar Pemrograman PHP</h5>
                    </a>
                    <div className="flex flex-wrap">
                      <div className="flex items-center gap-1 mb-2  text-[#717884] w-1/2">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-column" className="svg-inline--fa fa-chart-column fa-fw h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M32 32c17.7 0 32 14.3 32 32V400c0 8.8 7.2 16 16 16H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64C0 46.3 14.3 32 32 32zM160 224c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm128-64V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32zm64 32c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32zM480 96V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.7 14.3-32 32-32s32 14.3 32 32z" /></svg>
                        <span className="inline text-sm">
                          Beginer
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mb-2  text-[#717884] w-1/2">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="clock" className="svg-inline--fa fa-clock h-3 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg>
                        <span className="inline text-sm">
                          4 jam
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mb-2  text-[#717884] w-1/2">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="users" className="svg-inline--fa fa-users h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" /></svg>
                        <span className="inline text-sm">
                          3292 Siswa
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mb-2  text-[#717884] w-1/2">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="swatchbook" className="svg-inline--fa fa-swatchbook h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 32C0 14.3 14.3 0 32 0H160c17.7 0 32 14.3 32 32V416c0 53-43 96-96 96s-96-43-96-96V32zM223.6 425.9c.3-3.3 .4-6.6 .4-9.9V154l75.4-75.4c12.5-12.5 32.8-12.5 45.3 0l90.5 90.5c12.5 12.5 12.5 32.8 0 45.3L223.6 425.9zM182.8 512l192-192H480c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32H182.8zM128 64H64v64h64V64zM64 192v64h64V192H64zM96 440a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" /></svg>
                        <span className="inline text-sm">
                          42 Modul
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center mt-2">
                      <div className="text-orange-500 flex items-center">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star-half-stroke" className="inline fa-star-half-stroke me-1 h-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M288 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L288.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L288.1 439.8 159.8 508.3C149 514 135.9 513.1 126 506s-14.9-19.3-12.9-31.3L137.8 329 33.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L195 150.3 259.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L438.5 329l24.6 145.7z" />
                        </svg>
                        <span className="text-md">4.7</span>
                      </div>
                      <span class="ms-1 text-[#3a3f47]"><small>(338) Penilaian</small></span>
                    </div>
                  </div>
                  <hr className="bg-black" />
                  <div className="w-full p-5">
                    <table className="w-full">
                      <tr>
                        <td className="text-left text-sm">Beli</td>
                        <td className="text-right text-sm">Rp. <span>150.000</span></td>
                      </tr>
                      <tr>
                        <td className="text-left text-sm">Sewa</td>
                        <td className="text-right text-sm">Rp. <span>150.000</span></td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>

        {/* Question */}

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-3xl mb-5 ml-2 font-semibold text-[#3a3f47]">Do You Have Question</div>
       <div id="accordion-open" data-accordion="open">
          <h2 id="accordion-open-heading-1">
            <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-open-body-1" aria-expanded="true" aria-controls="accordion-open-body-1">
              <span className="flex items-center"><svg className="w-5 h-5 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" /></svg> What is Flowbite?</span>
              <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5 5 1 1 5" />
              </svg>
            </button>
          </h2>
          <div id="accordion-open-body-1" className="hidden" aria-labelledby="accordion-open-heading-1">
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
              <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
            </div>
          </div>
          <h2 id="accordion-open-heading-2">
            <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-open-body-2" aria-expanded="false" aria-controls="accordion-open-body-2">
              <span className="flex items-center"><svg className="w-5 h-5 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" /></svg>Is there a Figma file available?</span>
              <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5 5 1 1 5" />
              </svg>
            </button>
          </h2>
          <div id="accordion-open-body-2" className="hidden" aria-labelledby="accordion-open-heading-2">
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
              <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
            </div>
          </div>
          <h2 id="accordion-open-heading-3">
            <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-open-body-3" aria-expanded="false" aria-controls="accordion-open-body-3">
              <span className="flex items-center"><svg className="w-5 h-5 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" /></svg> What are the differences between Flowbite and Tailwind UI?</span>
              <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5 5 1 1 5" />
              </svg>
            </button>
          </h2>
          <div id="accordion-open-body-3" className="hidden" aria-labelledby="accordion-open-heading-3">
            <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
              <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
                <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
              </ul>
            </div>
          </div>
        </div>
       </div>


      </main>
    </>
  );
}

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
