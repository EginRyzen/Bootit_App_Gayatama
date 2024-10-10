import React from 'react';

function About() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-20">
            <div className="w-full flex flex-col mb-16 mb:mb-0 md:flex-row justify-between items-center gap-5">
                <div className="w-full md:w-1/2">
                    <div className="text-xl md:text-3xl font-normal text-[#3a3f47]">Bootcamp Events</div>
                    <p className="my-5 text-start font-sm text-[#3a3f47] text-sm md:text-lg">
                        Bootcamp events are a golden opportunity for individuals looking to enter the tech world quickly and effectively. With a combination of practical learning, mentor support, and industry connections, these bootcamps are a popular choice for many people seeking to develop a career in IT.
                    </p>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="w-full">
                        <img src="home/home-bootcamp.jpg" className="mx-auto h-96 rounded-md md:float-end" />
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col-reverse mb-16 mb:mb-0 md:flex-row justify-between items-center gap-5">
                <div className="w-full md:w-1/2">
                    <div className="w-full">
                        <img src="home/home-MeetUp.jpg" className="m-auto rounded-md h-96 md:float-start" />
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="text-xl md:text-3xl text-end font-normal text-[#3a3f47]">Meetup Events</div>
                    <p className="my-5 text-start font-sm text-[#3a3f47] text-sm md:text-lg">
                        Meetups are a valuable opportunity for individuals who want to engage with the tech community, learn from others' experiences, and build beneficial networks. With a relaxed and collaborative environment, these meetups are an ideal platform for exchanging ideas and knowledge in the tech world.
                    </p>
                </div>
            </div>
            <div className="w-full flex flex-col mb-16 mb:mb-0 md:flex-row justify-between items-center gap-5">
                <div className="w-full md:w-1/2">
                    <div className="text-xl md:text-3xl font-normal text-[#3a3f47]">Competition Events</div>
                    <p className="my-5 text-start font-sm text-[#3a3f47] text-sm md:text-lg">
                        IT competition events are an ideal platform for individuals to showcase their skills, innovate, and learn in a competitive atmosphere. With a variety of challenges and opportunities for recognition, these competitions are exciting venues for professionals and tech enthusiasts.
                    </p>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="w-full">
                        <img src="home/home-competition.jpg" className="mx-auto rounded-md h-96 md:float-end" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
