import React from 'react';

function SlideCard({ settings, Slider, bootcampData }) {
    return (
        <div className="max-w-6xl mx-auto overflow-hidden px-4 sm:px-6 lg:px-8 py-10">
            <div className="text-3xl mb-5 ml-2 font-semibold text-[#3a3f47]">Rekomendasi Kelas Online</div>
            <div className="slider-container">
                <Slider {...settings}>
                    {bootcampData.map((item, index) => (
                        <a href='' key={index} className="px-2">
                            <div className="group bg-white border border-gray-200 rounded-lg shadow h-full w-full min-h-[350px] max-h-[400px] min-w-[250px] max-w-[300px] flex flex-col justify-between">
                                <a href="#">
                                    <img className="rounded-t-lg w-full h-48 object-cover" src={item.image} />
                                </a>
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
                                            {item.title}
                                        </h5>
                                        <div className="flex flex-wrap">
                                            <div className="flex items-center gap-1 mb-2 text-[#717884] w-1/2">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-column" className="svg-inline--fa fa-chart-column fa-fw h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M32 32c17.7 0 32 14.3 32 32V400c0 8.8 7.2 16 16 16H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64C0 46.3 14.3 32 32 32zM160 224c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm128-64V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32zm64 32c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32zM480 96V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.7 14.3-32 32-32s32 14.3 32 32z" />
                                                </svg>
                                                <span className="inline text-xs">
                                                    {item.level}
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
                        </a>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default SlideCard;
