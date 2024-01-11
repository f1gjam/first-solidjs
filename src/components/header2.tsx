import 'flowbite';


import { DatePickr2 } from './datepickr2';
import { DemoComponent2 } from './flowbite-datepicker2';

export function Header2() {
    return (<header className="header">

        <h1 className="smin-h-screen grid place-content-center">LEADERBOARD - CURRENTLY IN BETA TESTING</h1>

        <nav className="bg-gray-800">


            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">

                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center mx-4">
                            <img className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                alt="UnixCraft">
                            </img>
                        </div>
                        <div className="flex flex-shrink-0 items-center mx-4">
                            <div className="flex flex-shrink-0 items-center mx-4 space-x-4">
                                <a href="#" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                                    aria-current="page">Home</a>
                                <a href="#"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Register</a>
                                <a href="#"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Help</a>


                                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="bg-gray-700 text-white hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center inline-flex items-center" type="button">Menu<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                                </button>

                                <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mens Cycling Leaderboard</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mens Cycling Yearly Leaderboard</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Womens Cycling Leaderboard</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Womens Cycling Yearly Leaderboard</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mens Running Leaderboard</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Womens Running Leaderboard</a>
                                        </li>
                                    </ul>
                                </div>

                                {/* <DatePickr setDate={setDate} /> */}
                                <DemoComponent2 />

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </nav>

        {/* <DatePickr2 /> */}







    </header >
    )
}
