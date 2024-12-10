import React from 'react';
import  image1  from "../images/Head-of-Operations-and-Support-2048x1120.png"
import { FaSearch } from "react-icons/fa";
function MainPage() {
    return (
        <section className='flex flex-col px-5 py-5 mx-auto lg:flex-row'>
            <div className='mt-10 lg:w-1/2'>
                <h1 className='font-roboto text-3xl text-center lg:text-left lg:max-w-[540px] font-bold text-dark-soft md:text-5xl'>
                    Read the most interesting articles
                </h1>
                <p className='text-dark-light mt-4 text-center md:text-xl lg:text-left'>
                    Loren ipsum dolor sit amet, consectetur adipiscing slit, sed do elusmod tempor inciddidunt ut labore et dolore magna aliqua
                </p>
                <div className='flex flex-col gap-y-2.5 mt-10 relative '>
                    <div className='relative'>
                    <FaSearch className='absolute left-3 top-1/2 w-6 h-6 text-[#959EAD]  -translate-y-1/2'/>
                        <input type='text' className='placeholder:font-bold font-semibold text-dark-soft placeholder:text-[#959EAD] rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] md:py-4' placeholder='Search a article'/>
                    </div>
                    
                    <button className='w-full bg-primary text-white font-semibold rounded-lg px-5 py-3 md:absolute md:right-2 md:left-1/2 md:-translate-y-1/2 md:w-fit md:py-2'>Search</button>
                </div>
                <div className='flex flex-col lg:gap'>
                    <span>
                        Popular Tags:
                    </span>
                    <ul>
                        <li>Design</li>
                        <li>User Experience</li>
                        <li>User Interface</li>
                    </ul>
                </div>
            </div>
            <div>
                {/* <img alt='Users are reading articles' className='' src={image1} /> */}
            </div>
        </section>
    )
}

export default MainPage