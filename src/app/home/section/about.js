import React from 'react'

function About() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-20">
            <div className="w-full flex flex-col mb-16 mb:mb-0 md:flex-row justify-between items-center gap-5">
                <div className="w-full md:w-1/2">
                    <div className="text-xl md:text-3xl font-normal text-[#3a3f47]">Event Bootcamp</div>
                    <p className="my-5 text-start font-sm text-[#3a3f47] text-sm md:text-lg">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="w-full">
                        <img src="https://d168wuuhrgvlrj.cloudfront.net/cloudfront/templates/v1/landing/free%202_11zon.png" className="mx-auto md:float-end" />
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col-reverse mb-16 mb:mb-0 md:flex-row justify-between items-center gap-5">
                <div className="w-full md:w-1/2">
                    <div className="w-full">
                        <img src="https://d168wuuhrgvlrj.cloudfront.net/cloudfront/templates/v1/landing/free%203_11zon.png" className="m-auto md:float-start" />
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="text-xl md:text-3xl text-end font-normal text-[#3a3f47]">Event Meet Up</div>
                    <p className="my-5 text-start font-sm text-[#3a3f47] text-sm md:text-lg">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>
            <div className="w-full flex flex-col mb-16 mb:mb-0 md:flex-row justify-between items-center gap-5">
                <div className="w-full md:w-1/2">
                    <div className="text-xl md:text-3xl font-normal text-[#3a3f47]">Event Competition</div>
                    <p className="my-5 text-start font-sm text-[#3a3f47] text-sm md:text-lg">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s,
                    </p>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="w-full">
                        <img src="https://d168wuuhrgvlrj.cloudfront.net/cloudfront/templates/v1/landing/free%202_11zon.png" className="mx-auto md:float-end" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About