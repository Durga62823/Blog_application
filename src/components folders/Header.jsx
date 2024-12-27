import React, { useState, useEffect } from 'react';
import { IoMdMenu, IoMdClose } from "react-icons/io";

function Header() {
    const [navIsVisible, setNavIsVisible] = useState(false);
    const [isHeaderVisible, setIsHeaderVisible] = useState(true); // State to track header visibility

    const navVisibilityHandler = () => {
        setNavIsVisible((prev) => !prev);
    };

    const NaveItemsInfo = [
        { name: "Home" },
        { name: "Pages" },
        { name: "FAQ" },
        { name: "Sign out" },
        { name: "Sign in" }
    ];

    const NavItems = ({ name }) => {
        return (
            <li className="relative group">
                <a className="px-2 py-2 text-sm sm:text-base " href="">
                    {name}
                </a>
                <span className="text-blue-500 absolute transition-all duration-500 font-bold right-0 hover:left-[-4] top-0 opacity-0 group-hover:right-[90%] group-hover:opacity-100">
                    #
                </span>
            </li>
        );
    };

    // Handle scroll event to hide/show the header
    useEffect(() => {
        let lastScrollY = window.scrollY;
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setIsHeaderVisible(false); // Hide header when scrolling down
            } else {
                setIsHeaderVisible(true); // Show header when scrolling up
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className="sticky top-0 left-0 right-0 z-50">
            <header
                className={`container mx-auto px-5 flex flex-wrap items-center justify-between transition-all duration-300 ${
                    isHeaderVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
            >
                <div className="flex w-full lg:w-auto justify-between items-center">
                    <h1 className="text-white py-4 text-xl sm:text-2xl font-bold">Blog</h1>

                    <div className="lg:hidden z-50 cursor-pointer">
                        {navIsVisible ? (
                            <IoMdClose
                                onClick={navVisibilityHandler}
                                className="w-6 h-6 text-white"
                            />
                        ) : (
                            <IoMdMenu
                                onClick={navVisibilityHandler}
                                className="w-6 h-6 text-white"
                            />
                        )}
                    </div>
                </div>

                <div
                    className={`transition-all duration-300 lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] ${
                        navIsVisible ? 'right-0' : '-right-full'
                    } fixed lg:static top-0 bottom-0 w-full bg-black lg:w-auto flex flex-col lg:flex-row items-center justify-center gap-y-5 lg:gap-y-0 lg:gap-x-6`}
                >
                    <nav className="flex flex-col lg:flex-row items-center justify-center gap-y-5 gap-x-2 lg:gap-y-0">
                        <ul
                            className={`flex flex-col lg:flex-row text-white items-center gap-y-6 lg:gap-x-6 font-semibold text-center ${
                                navIsVisible ? 'text-white' : 'text-white'
                            }`}
                        >
                            {NaveItemsInfo.map((item) => (
                                <NavItems key={item.name} name={item.name} />
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>
        </section>
    );
}

export default Header;
