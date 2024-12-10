import React, { useState } from 'react';
import {
    ChartPieIcon,
    CursorArrowRaysIcon
} from '@heroicons/react/24/outline'
import { IoMdMenu, IoMdClose } from "react-icons/io";
function Header() {
    const [navIsVisible, setnavIsVisible] = useState(false);
    const navVisibilityHandler = () => {
        setnavIsVisible((pre) => {
            return !pre
        })
    }
    const solutions = [
        { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
        { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon }
    ]

    const NaveItemsInfo = [
        { name: "Home" },
        // { name: "Pricing" },
        { name: "Pages" },
        { name: "FAQ" },
        { name: "Sign out" },
    ];

    const NavItems = ({ name }) => {
        return (
            <li className="relative group">
                <a className="px-2 py-2 text-sm sm:text-base" href="">
                    {name}
                </a>
                <span className="text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 opacity-0 group-hover:right-[90%] group-hover:opacity-100">/</span>
            </li>
        );
    };
    return (
        <section className="">
            <header className="container mx-auto px-5 flex flex-wrap items-center justify-between">
                <div className="flex w-full lg:w-auto justify-between items-center">
                    <h1 className="text-green-950 py-4 text-xl sm:text-2xl font-bold">
                        Blog
                    </h1>
                    <div className="lg:hidden z-50">
                        {navIsVisible ? (
                            <IoMdClose onClick={navVisibilityHandler} className="w-6 h-6" />
                        ) : (
                            <IoMdMenu onClick={navVisibilityHandler} className="w-6 h-6" />
                        )}
                    </div>
                </div>
                <div
                    className={`transition-all duration-300 lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] ${navIsVisible ? 'right-0' : '-right-full'
                        } 
        fixed lg:static top-0 bottom-0 w-full lg:w-auto flex flex-col lg:flex-row items-center justify-center gap-y-5 lg:gap-y-0 lg:gap-x-6`}
                >
                    <nav className="flex flex-col lg:flex-row items-center justify-center gap-y-5 gap-x-2 lg:gap-y-0">
                        <ul
                            className={`flex flex-col lg:flex-row items-center gap-y-5 lg:gap-x-6 font-semibold text-center ${navIsVisible ? 'text-white' : 'text-gray-900'
                                }`}
                        >
                            {NaveItemsInfo.map((item) => (
                                <NavItems key={item.name} name={item.name} />
                            ))}
                        </ul>
                        <button className="border-2 border-blue-700 px-4 py-2 rounded-full text-blue-500 hover:bg-teal-400 hover:text-black text-sm sm:text-base">
                            Sign in
                        </button>
                    </nav>
                </div>

            </header>
        </section>

    )
}

export default Header;