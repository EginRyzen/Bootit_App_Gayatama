import React from 'react'

export default function Account() {
    return (
        <>
            <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow w-full mb-10">
                <h5 className="mb-2 text-xl font-medium tracking-tight text-slate-500">Change Email</h5>
                <hr />
                <form>
                    <div className='mt-10 w-full md:w-3/4'>
                        <div className="mb-5">
                            <label htmlFor="email" className="block mb-2 text-md font-medium text-gray-900">Email</label>
                            <input type="email" id="email" className="bg-gray-50 border text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-gray-400 placeholder-gray-400" placeholder="demo@gmail.com" defaultValue="demo@gmail.com" required />
                            <span className='text-xs text-slate-400'>
                                The email will change when you click on the verification link sent to your new email.
                            </span>
                        </div>
                        <button
                            type="button"
                            className="border focus:ring-4 focus:outline-none font-bold rounded-sm text-sm px-5 py-2.5 text-center me-2 mb-2 border-[#3a3f47] text-white bg-gray-600 ring-gray-800 transition-all duration-500 ease-in-out"
                        >
                            Change Email
                        </button>
                    </div>
                </form>
            </div>

            <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow w-full mb-10">
                <h5 className="mb-2 text-xl font-medium tracking-tight text-slate-500">Change Password</h5>
                <hr />
                <div className="flex mt-3 items-center p-4 mb-4 text-xs text-yellow-500 rounded-md bg-yellow-50" role="alert">
                    <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span className="sr-only">Info</span>
                    <div>
                        <span className="font-medium">Alert!</span> Fill in if you want to change the password.
                    </div>
                </div>

                <form>
                    <div className='mt-5 w-full md:w-3/4'>
                        <div className="mb-5">
                            <label htmlFor="npassword" className="block mb-2 text-md font-medium text-gray-900">New Password<sup className='text-red-500'>*</sup></label>
                            <input type="password" id="npassword" className="bg-gray-50 border text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-gray-400 placeholder-gray-400" placeholder="Enter New Password" required />
                            <p className='text-xs mt-1 text-slate-400'>Use at least 8 characters with a combination of letters and numbers.</p>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="cpassword" className="block mb-2 text-md font-medium text-gray-900">Confirm New Password<sup className='text-red-500'>*</sup></label>
                            <input type="password" id="cpassword" className="bg-gray-50 border text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-gray-400 placeholder-gray-400" placeholder="Enter New Password" required />
                        </div>
                        <button
                            type="button"
                            className="border focus:ring-4 focus:outline-none font-bold rounded-sm text-sm px-5 py-2.5 text-center me-2 mb-2 border-[#3a3f47] text-white bg-gray-600 ring-gray-800 transition-all duration-500 ease-in-out"
                        >
                            Save Password
                        </button>
                    </div>
                </form>
            </div>

            <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow w-full mb-10">
                <h5 className="mb-2 text-xl font-normal tracking-tight text-slate-500">Connect Account</h5>
                <hr />
                <div className='mt-5 w-full md:w-3/4'>
                    <div className="mb-5">
                        <div className='mb-2'>
                            <a href='#' className='inline-block py-2 px-4 border border-slate-300 rounded-sm'>
                                <svg width={48} height={16} viewBox="0 0 48 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M46.5048 9.7783L47.8364 10.6801C47.4042 11.3268 46.3705 12.4363 44.5834 12.4363C42.3641 12.4363 40.7114 10.692 40.7114 8.47306C40.7114 6.11182 42.3817 4.50992 44.3965 4.50992C46.423 4.50992 47.4159 6.14735 47.7371 7.03135L47.9124 7.4823L42.6912 9.67744C43.0884 10.4725 43.7075 10.8759 44.5834 10.8759C45.4595 10.8759 46.0668 10.4369 46.5048 9.7783ZM42.4109 8.34858L45.8975 6.87716C45.7047 6.38478 45.1325 6.03478 44.449 6.03478C43.579 6.03478 42.37 6.81792 42.4109 8.34858Z" fill="#FF302F" />
                                    <path d="M38.1943 0.469608H39.8762V12.0744H38.1943V0.469513V0.469608Z" fill="#20B15A" />
                                    <path d="M35.5429 4.81838H37.1664V11.8667C37.1664 14.7915 35.4669 15.9959 33.4579 15.9959C31.5657 15.9959 30.4269 14.7026 30.0006 13.6525L31.4898 13.0235C31.7584 13.6702 32.4067 14.4356 33.4579 14.4356C34.7485 14.4356 35.5429 13.6228 35.5429 12.104V11.5345H35.4845C35.099 12.009 34.3631 12.4362 33.4287 12.4362C31.4781 12.4362 29.6909 10.7097 29.6909 8.48495C29.6909 6.24819 31.4781 4.504 33.4287 4.504C34.3573 4.504 35.099 4.92524 35.4845 5.388H35.5429V4.81847V4.81838ZM35.6596 8.48495C35.6596 7.08476 34.7427 6.06428 33.5747 6.06428C32.3949 6.06428 31.4021 7.08476 31.4021 8.48495C31.4021 9.86724 32.3949 10.8699 33.5747 10.8699C34.7428 10.8759 35.6597 9.86724 35.6597 8.48495H35.6596Z" fill="#3686F7" />
                                    <path d="M20.4577 8.45525C20.4577 10.7394 18.7057 12.4184 16.5565 12.4184C14.4074 12.4184 12.6553 10.7335 12.6553 8.45525C12.6553 6.15925 14.4074 4.48621 16.5565 4.48621C18.7057 4.48621 20.4577 6.15925 20.4577 8.45525ZM18.7524 8.45525C18.7524 7.03144 17.7361 6.0524 16.5565 6.0524C15.3768 6.0524 14.3606 7.03144 14.3606 8.45525C14.3606 9.86725 15.3768 10.8581 16.5565 10.8581C17.7362 10.8581 18.7524 9.86725 18.7524 8.45525Z" fill="#FF302F" />
                                    <path d="M28.9787 8.47306C28.9787 10.7573 27.2266 12.4362 25.0775 12.4362C22.9283 12.4362 21.1763 10.7572 21.1763 8.47306C21.1763 6.17706 22.9283 4.50992 25.0775 4.50992C27.2266 4.50992 28.9787 6.17116 28.9787 8.47306ZM27.2675 8.47306C27.2675 7.04925 26.2513 6.0702 25.0716 6.0702C23.8919 6.0702 22.8757 7.04925 22.8757 8.47306C22.8757 9.88506 23.8919 10.8759 25.0716 10.8759C26.2571 10.8759 27.2675 9.87916 27.2675 8.47306Z" fill="#FFBA40" />
                                    <path d="M6.24289 10.6979C3.79582 10.6979 1.88032 8.69257 1.88032 6.20666C1.88032 3.72085 3.79582 1.71552 6.24289 1.71552C7.56279 1.71552 8.52635 2.24352 9.23885 2.9199L10.4128 1.72742C9.41998 0.760376 8.09426 0.0245667 6.24289 0.0245667C2.89067 0.0246619 0.0698242 2.80133 0.0698242 6.20666C0.0698242 9.61218 2.89067 12.3888 6.24289 12.3888C8.05339 12.3888 9.41998 11.7836 10.4887 10.6564C11.5866 9.54095 11.9254 7.97466 11.9254 6.70504C11.9254 6.30752 11.8787 5.89819 11.8261 5.59561H6.24289V7.24495H10.22C10.1032 8.27733 9.78204 8.98333 9.30898 9.4638C8.73664 10.0512 7.83148 10.6979 6.24289 10.6979Z" fill="#3686F7" />
                                </svg>
                            </a>
                        </div>
                        <p className='text-sm text-gray-400'>Connect your account to be able to login with the above services.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
