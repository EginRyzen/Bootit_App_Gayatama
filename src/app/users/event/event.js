import Image from 'next/image'
import React from 'react'

export function Event() {
    return (
        <div className='w-full flex flex-col py-10'>
            <div className='text-[#3a3f47] text-lg sm:text-3xl font-medium'>
                Setelan
            </div>

            <div className='w-full py-10'>
                <div className="grid grid-cols-2 gap-4">

                    <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
                        <div className='flex'>
                            <Image className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/peofile/event/event1.jpg" alt="img" width={200} height={200} />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            </div>
                        </div>
                    </a>


                    <div >2</div>
                    <div >5</div>
                    <div >6</div>
                    <div >7</div>
                    <div >8</div>
                    <div >9</div>
                    <div >10</div>
                </div>
            </div>

        </div>
    )
}
