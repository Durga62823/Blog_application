import React from 'react';
import image1 from "../images/stories-banner.jpg";
import { FaSearch } from "react-icons/fa";

function MainPage() {
    return (
        <section className='flex flex-col px-5 py-5 mx-auto lg:flex-row lg:items-center lg:gap-x-10'>
            <div className='mt-10 lg:w-1/2 md:max-w-full'>
                <h1 className='font-roboto text-3xl text-center lg:text-left lg:max-w-[540px] font-bold text-dark-soft md:text-5xl'>
                    Read the most interesting articles
                </h1>
                <p className='text-dark-light mt-4 text-center md:text-xl lg:text-left'>
                    Loren ipsum dolor sit amet, consectetur adipiscing slit, sed do elusmod tempor inciddidunt ut labore et dolore magna aliqua
                </p>
                <div className='flex flex-col gap-y-2.5 mt-10 relative '>
                    <div className='relative'>
                        <FaSearch className='absolute left-3 top-1/2 w-6 h-6 text-[#959EAD] -translate-y-1/2' />
                        <input
                            type='text'
                            className='placeholder:font-bold font-semibold text-dark-soft placeholder:text-[#959EAD] rounded-lg pl-12 pr-3 w-full md:w-full py-3 focus:outline-none shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] md:py-4'
                            placeholder='Search articles'
                        />
                    </div>
                    <button className=' bg-green-500 opacity-90 hover:opacity-100 text-black font-roboto text-semibold rounded-lg px-5 py-3 md:right-2 md:left-1/2 md:-translate-y-1/2 md:w-[20%] md:py-2 md:mt-7'>
                        Search
                    </button>
                </div>
                <div className='items-start mt-4 flex flex-col md:flex md:gap-2 md:flex-row lg:gap-x-4 lg:mt-7'>
                    <span className='text-dark-light font-semibold italic'>
                        Popular Tags:
                    </span>
                    <ul className='flex md:pt-0 pt-2 flex-wrap gap-x-2.5 gap-y-2.5'>
                        <li className='bg-green-600  rounded-lg bg-opacity-60 hover:bg-opacity-100 cursor-pointer px-2 font-semibold'>Design</li>
                        <li className='bg-green-600  rounded-lg bg-opacity-60 hover:bg-opacity-100 cursor-pointer px-2 font-semibold'>User Experience</li>
                        <li className='bg-green-600  rounded-lg bg-opacity-60 hover:bg-opacity-100 cursor-pointer px-2 font-semibold'>User Interface</li>
                    </ul>
                </div>
            </div>
            <div className='mt-10 lg:w-1/2 md:flex md:items-center md:justify-center'>
                <img
                    alt='Users are reading articles'
                    className='w-full max-w-[700px] h-auto object-contain'
                    src={image1}
                />
            </div>
        </section>
    );
}
export default MainPage;