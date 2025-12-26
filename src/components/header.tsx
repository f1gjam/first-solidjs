import 'flowbite';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { DatePickr } from './datepickr';

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (<header className="header">
        <h1 className="text-center text-xl sm:text-2xl py-3 font-bold bg-yellow-100">LEADERBOARD - CURRENTLY IN BETA TESTING</h1>

        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    
                    {/* Logo */}
                    <div className="flex flex-shrink-0 items-center">
                        <Link to="/">
                            <img className="h-10 w-auto"
                                src="/images/unixcraft-logo.svg"
                                alt="UnixCraft"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex lg:items-center lg:space-x-2">
                        <Link to="/" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700">
                            Home
                        </Link>
                        <Link to="/register" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                            Register
                        </Link>
                        <Link to="/documentation" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                            Docs
                        </Link>
                        <Link to="/help" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                            Help
                        </Link>
                        <Link to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                            About
                        </Link>

                        {/* Dropdown for Leaderboards */}
                        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" 
                            className="bg-gray-700 text-white hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" 
                            type="button">
                            Leaderboards
                            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>

                        <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-56 dark:bg-gray-700">
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                <li>
                                    <Link to="/mens_leaderboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        Mens Cycling Monthly
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/mens_yearly_leaderboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        Mens Cycling Yearly
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/womens_leaderboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        Womens Cycling Monthly
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/womens_yearly_leaderboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        Womens Cycling Yearly
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/mens_running_leaderboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        Mens Running
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/womens_running_leaderboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        Womens Running
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            {!mobileMenuOpen ? (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            <Link to="/" className="block bg-gray-900 text-white rounded-md px-3 py-2 text-base font-medium" onClick={() => setMobileMenuOpen(false)}>
                                Home
                            </Link>
                            <Link to="/register" className="block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium" onClick={() => setMobileMenuOpen(false)}>
                                Register
                            </Link>
                            <Link to="/documentation" className="block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium" onClick={() => setMobileMenuOpen(false)}>
                                Documentation
                            </Link>
                            <Link to="/help" className="block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium" onClick={() => setMobileMenuOpen(false)}>
                                Help
                            </Link>
                            <Link to="/about" className="block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium" onClick={() => setMobileMenuOpen(false)}>
                                About
                            </Link>
                            
                            <div className="border-t border-gray-700 mt-2 pt-2">
                                <p className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Leaderboards</p>
                                <Link to="/mens_leaderboard" className="block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm" onClick={() => setMobileMenuOpen(false)}>
                                    Mens Cycling Monthly
                                </Link>
                                <Link to="/mens_yearly_leaderboard" className="block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm" onClick={() => setMobileMenuOpen(false)}>
                                    Mens Cycling Yearly
                                </Link>
                                <Link to="/womens_leaderboard" className="block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm" onClick={() => setMobileMenuOpen(false)}>
                                    Womens Cycling Monthly
                                </Link>
                                <Link to="/womens_yearly_leaderboard" className="block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm" onClick={() => setMobileMenuOpen(false)}>
                                    Womens Cycling Yearly
                                </Link>
                                <Link to="/mens_running_leaderboard" className="block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm" onClick={() => setMobileMenuOpen(false)}>
                                    Mens Running
                                </Link>
                                <Link to="/womens_running_leaderboard" className="block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm" onClick={() => setMobileMenuOpen(false)}>
                                    Womens Running
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
        
        <div className="px-3 py-2 bg-gray-100">
            <DatePickr />
        </div>
    </header>
    )
}
