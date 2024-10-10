import React from 'react'

function NavMenu({ navMenu }) {
    // const handleClick = (name) => {
    //     sessionStorage.setItem("category", name);
    // }
    return (
        <>
            {navMenu.map((item) => {
                return (
                    <div key={item.id} className="relative">
                        {/* Link tanpa submenu */}
                        {!item.submenu ? (
                            <a
                                href={item.link}
                                className="block cursor-pointer hover:bg-[#e6e6e6] py-3 px-5 rounded-sm text-[#3a3f47] transition-all duration-300 ease-in-out text-base md:bg-transparent font-medium"
                            >
                                {item.name}
                            </a>

                        ) : (
                            // Dropdown untuk item dengan submenu
                            <div className="group dropdown flex text-[#3a3f47] hover:text-black cursor-pointer font-medium text-base tracking-wide hover:bg-[#e6e6e6] py-3 px-5 rounded-sm">
                                <span>{item.name}</span>
                                <div className="dropdown-menu w-[500px] absolute left-0 mt-5 pt-4 max-h-0 opacity-0 transform -translate-y-5 transition-all duration-500 ease-in-out overflow-hidden group-hover:max-h-96 group-hover:opacity-100 group-hover:translate-y-0">
                                    <div className="bg-white border border-gray-200 rounded-lg shadow  p-3">
                                        <span className="pl-3 text-medium">Program</span>
                                        <hr className="my-2" />
                                        <ul className="w-auto grid grid-cols-2 gap-1">
                                            {item.submenu.map((subItem) => (
                                                <li
                                                    onClick={() => {
                                                        sessionStorage.setItem('category', subItem.name);
                                                    }}

                                                    key={subItem.id} className="pl-3 pr-12 py-3 flex gap-1 items-center rounded-md hover:bg-[#e6e6e6]">
                                                    {subItem.icon}
                                                    <a
                                                        href={subItem.link}
                                                        className="block text-[#3a3f47] font-normal text-sm hover:text-black cursor-pointer"
                                                    >
                                                        {subItem.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </>
    )
}

export default NavMenu