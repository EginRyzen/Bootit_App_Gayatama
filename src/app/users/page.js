import React from 'react'

export default function User() {
    return (
        <div className='w-full'>
            <div className='bg-[#121314]'>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex items-center gap-5">
                    <div>
                        <img src="./img/user.png" className='h-40' />
                    </div>
                    <div>
                        <h3 className='text-white block text-4xl font-mesium'>Egin Sefiano Widodo</h3>
                        <div className='my-3 flex gap-3'>
                            <div className='flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-green-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                <div className='text-white'>Bergabung sejak 2023</div>
                            </div>
                            <div className='flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5  text-blue-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                                <div className='text-white'>Kabupaten Ponorogo</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-screen'>
                <div className='w-full'>
                    <ul className="max-w-md space-y-1 text-gray-500  list-none dark:text-gray-400">
                        <li>
                            At least 10 characters (and up to 100 characters)
                        </li>
                        <li>
                            At least one lowercase character
                        </li>
                        <li>
                            Inclusion of at least one special character, e.g., ! @ # ?
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
