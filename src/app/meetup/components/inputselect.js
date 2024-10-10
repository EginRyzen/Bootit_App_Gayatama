import React from 'react'

export default function InputSelect() {
    return (
        <>
            <form className="max-w-sm flex items-center">
                <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-2 focus:ring-blue-300 focus:ring-offset-0 focus:border-blue-300 outline-none block w-full p-2 capitalize"
                    defaultValue="Choose a country" // Set the default selected value here
                >
                    <option disabled value="Choose a country">latest events</option>
                    <option value="US">latest updates</option>
                    <option value="CA">ends soon</option>
                </select>
            </form>
        </>
    )
}
