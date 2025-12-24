import React from 'react'
import logo from '../assets/logo.svg'
import { navItems } from '../constants'

const Navbar = () => {

    return (
        <nav className="w-full bg-dark-bg ">
            <div className="w-full">
                <div className="flex items-center h-[80px]">

                    <div className="flex-shrink-0 pl-12">
                        <img src={logo} alt="Logo" className="h-8 w-auto" />
                    </div>




                    <div className="flex items-center gap-6 ml-auto pr-12">

                        <div className="hidden lg:flex items-center gap-8 pl-12">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="font-avenir font-medium text-nav leading-nav tracking-nav text-white hover:text-gray-300 transition-colors whitespace-nowrap"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>

                        <button className="hidden md:flex items-center space-x-2 hover:opacity-80 transition-opacity">
                            <span className="text-2xl">🇺🇸</span>
                        </button>

                        <div className="hidden md:block h-6 w-px bg-gray-600"></div>


                        <a
                            href="#"
                            className="font-avenir font-medium text-nav leading-nav tracking-nav text-white hover:text-gray-300 transition-colors whitespace-nowrap"
                        >
                            Sign In
                        </a>

                        {/* Try Free Button */}
                        <button className="font-avenir font-medium text-nav leading-nav tracking-nav text-white border border-white rounded px-6 py-2 hover:bg-white hover:text-dark-bg transition-all whitespace-nowrap">
                            Try free
                        </button>

                        {/* Mobile Menu Button */}
                        <button className="lg:hidden flex flex-col space-y-1.5 p-2">
                            <span className="w-6 h-0.5 bg-white"></span>
                            <span className="w-6 h-0.5 bg-white"></span>
                            <span className="w-6 h-0.5 bg-white"></span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar