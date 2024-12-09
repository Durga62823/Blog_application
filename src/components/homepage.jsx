import React from 'react';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import {
    ArrowPathIcon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
} from '@heroicons/react/24/outline'


function Homepage() {
    const solutions = [
        { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
        { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
        { name: 'Security', description: "Your customers' data will be safe and secure", href: '#', icon: FingerPrintIcon },
        { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
        { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
    ]

    const NaveItemsInfo = [
        { name: "Home" },
        // { name: "Pricing" },
        { name: "Pages" },
        { name: "FAQ" },
        { name: "Sign in" },
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
                {/* Logo Section */}
                <div className="w-full sm:w-auto text-center sm:text-left">
                    <h1 className="text-green-950 py-4 text-xl sm:text-2xl font-bold">
                        Blog
                    </h1>
                </div>

                {/* Navigation Section */}
                <div className="w-full sm:w-auto">
                    <nav className="flex flex-col sm:flex-row items-center gap-y-2 sm:gap-y-0 sm:gap-x-6">
                        <ul className="flex flex-col sm:flex-row gap-y-2 sm:gap-y-0 sm:gap-x-4 font-semibold text-center sm:text-left">
                            {NaveItemsInfo.map((item) => (
                                <NavItems key={item.name} name={item.name} />
                            ))}
                            <Popover className="relative">
                                <PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                                    <span>Action</span>
                                    <ChevronDownIcon aria-hidden="true" className="size-5" />
                                </PopoverButton>

                                <PopoverPanel
                                    transition
                                    className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                                >
                                    <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 shadow-lg ring-1 ring-gray-900/5">
                                        <div className="p-4">
                                            {solutions.map((item) => (
                                                <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                                                    <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                        <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                                                    </div>
                                                    <div>
                                                        <a href={item.href} className="font-semibold text-gray-900">
                                                            {item.name}
                                                            <span className="absolute inset-0" />
                                                        </a>
                                                        <p className="mt-1 text-gray-600">{item.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                            {/* {callsToAction.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                                                >
                                                    <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                                                    {item.name}
                                                </a>
                                            ))} */}
                                        </div>
                                    </div>
                                </PopoverPanel>
                            </Popover>

                        </ul>
                        <button className="border-2 border-blue-700 px-4 py-2 rounded-full text-blue-500 hover:bg-teal-400 hover:text-black text-sm sm:text-base">
                            Sign in
                        </button>
                    </nav>
                </div>
            </header>
        </section>
    );
}

export default Homepage;
