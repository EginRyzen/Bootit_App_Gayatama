import React from 'react'

function ButtonMobile({openModalRegister,openModalLogin}) {
    return (
        <>
            <div className="flex justify-center gap-3">
                <button type="button" onClick={openModalLogin} className="text-[#3a3f47] hover:text-white hover:bg-gray-600 border bg-white border-[#3a3f47] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-xs px-6 py-2 text-center cursor-pointer transition-all duration-500 ease-in-out">Sign in</button>
                <button type="button" onClick={openModalRegister} className="text-[#3a3f47] hover:text-white hover:bg-gray-600 border bg-white border-[#3a3f47] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-xs px-6 py-2 text-center cursor-pointer transition-all duration-500 ease-in-out">Register</button>
            </div>
        </>
    )
}

export default ButtonMobile