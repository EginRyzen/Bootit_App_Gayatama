import React from 'react';

function SlideCard({ settings, Slider, bootcampData }) {
    return (
        <div className="max-w-6xl mx-auto overflow-hidden px-4 sm:px-6 lg:px-8 py-10">
            <div className="text-3xl mb-5 ml-2 font-semibold text-[#3a3f47]">Various Popular Class</div>
            <div className="slider-container">
                <Slider {...settings}>
                    {bootcampData.map((item, index) => (
                        <div className="px-2" key={index}>
                            <div className="group bg-white border border-gray-200 rounded-lg shadow h-full w-full min-h-[350px] max-h-[400px] min-w-[250px] max-w-[300px] flex flex-col justify-between">
                                <a href="#">
                                    <img className="rounded-t-lg w-full h-48 object-cover" src={item.image} alt={item.title} />
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
                                            {item.title.length > 30
                                                ? item.title.slice(0, 30) + '...'
                                                : item.title}
                                        </h5>
                                        <div className="flex flex-wrap">
                                            <div className="flex items-center gap-1 mb-2 text-[#717884] w-1/2">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-column" className="svg-inline--fa fa-chart-column fa-fw h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M32 32c17.7 0 32 14.3 32 32V400c0 8.8 7.2 16 16 16H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64C0 46.3 14.3 32 32 32zM160 224c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm128-64V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32zm64 32c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32zM480 96V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.7 14.3-32 32-32s32 14.3 32 32z" />
                                                </svg>
                                                <span className="inline text-sm">
                                                    {item.level}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-1 mb-2 text-[#717884] w-1/2">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="clock" className="svg-inline--fa fa-clock h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                                </svg>
                                                <span className="inline text-sm">
                                                    {item.time}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-1 mb-2 text-[#717884] w-1/2">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="users" className="svg-inline--fa fa-users h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                                    <path fill="currentColor" d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" />
                                                </svg>
                                                <span className="inline text-sm">
                                                    {item.students}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-1 mb-2 text-[#717884] w-1/2">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="swatchbook" className="svg-inline--fa fa-swatchbook h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                                    <path fill="currentColor" d="M640 128H128c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h512c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32zM0 128c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V128zm480 320H128V160h352v288zm128 0H512V160h96v288zm0-320H512V64h96v64z" />
                                                </svg>
                                                <span className="inline text-sm">
                                                    {item.course}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-3 flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <span className="font-bold text-lg text-[#3a3f47]">
                                                {item.price}
                                            </span>
                                            <span className="text-xs text-[#717884]">
                                                {item.discount}
                                            </span>
                                        </div>
                                        <a href={item.link} className="text-white bg-[#4f46e5] hover:bg-[#6366f1] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                            {item.buttonText}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default SlideCard;