import React from 'react'

function About() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-20">
            <div className="w-full flex flex-col mb-16 mb:mb-0 md:flex-row justify-between items-center gap-5">
                <div className="w-full md:w-1/2">
                    <div className="text-xl md:text-3xl font-normal text-[#3a3f47]">Event Bootcamp</div>
                    <p className="my-5 text-start font-sm text-[#3a3f47] text-sm md:text-lg">
                    Event bootcamp merupakan kesempatan emas bagi individu yang ingin memasuki dunia teknologi dengan cepat dan efektif. Dengan kombinasi pembelajaran praktis, dukungan mentor, dan koneksi industri, bootcamp ini menjadi pilihan populer bagi banyak orang yang ingin mengembangkan karier di bidang IT.
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
                    <div className="text-xl md:text-3xl text-end font-normal text-[#3a3f47]">Event Meet Up</div>
                    <p className="my-5 text-start font-sm text-[#3a3f47] text-sm md:text-lg">
                    Event meetup adalah kesempatan berharga bagi individu yang ingin terlibat dalam komunitas teknologi, belajar dari pengalaman orang lain, dan membangun jaringan yang bermanfaat. Dengan lingkungan yang santai dan kolaboratif, meetup ini menjadi platform yang ideal untuk pertukaran ide dan pengetahuan di dunia teknologi.
                    </p>
                </div>
            </div>
            <div className="w-full flex flex-col mb-16 mb:mb-0 md:flex-row justify-between items-center gap-5">
                <div className="w-full md:w-1/2">
                    <div className="text-xl md:text-3xl font-normal text-[#3a3f47]">Event Competition</div>
                    <p className="my-5 text-start font-sm text-[#3a3f47] text-sm md:text-lg">
                    Event competition IT adalah platform yang ideal bagi individu untuk menunjukkan keterampilan mereka, berinovasi, dan belajar dalam suasana yang kompetitif. Dengan tantangan yang beragam dan kesempatan untuk mendapatkan pengakuan, kompetisi ini menjadi ajang yang menarik bagi para profesional dan penggemar teknologi.
                    </p>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="w-full">
                        <img src="home/home-competition.jpg" className="mx-auto rounded-md h-96 md:float-end" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About