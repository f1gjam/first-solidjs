import 'flowbite';

export function Footer() {
    return (


        <footer className="bg-gray-800 rounded-lg shadow bottom-0 z-50">

            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between ">
                <img className="h-8 w-auto" src="/images/api_logo_pwrdBy_strava_stack_gray.png"
                    alt="Strava"></img>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-300 sm:mt-0">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">About</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>

        </footer>

    )
}

