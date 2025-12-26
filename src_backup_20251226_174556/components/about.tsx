export function About() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <h1 className="text-4xl font-bold mb-6">About Strava Club Stats</h1>
            
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">What is Strava Club Stats?</h2>
                <p className="mb-4 text-lg">
                    Strava Club Stats is a leaderboard application that helps cycling and running club members 
                    track and compare their activities. Built by athletes, for athletes, it provides an easy 
                    way to see how you stack up against your club mates.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Features</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2">🚴 Cycling Leaderboards</h3>
                        <p className="text-sm">Track monthly and yearly cycling stats including indoor/outdoor splits</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2">🏃 Running Leaderboards</h3>
                        <p className="text-sm">Compare running distances and elevation gains</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2">📊 Detailed Statistics</h3>
                        <p className="text-sm">Distance, elevation, indoor/outdoor percentages, and more</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2">📱 Mobile Friendly</h3>
                        <p className="text-sm">Fully responsive design works on all devices</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2">🔍 Filter & Sort</h3>
                        <p className="text-sm">Advanced table filtering and sorting capabilities</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2">📅 Historical Data</h3>
                        <p className="text-sm">View leaderboards for any past month or year</p>
                    </div>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
                <div className="space-y-4">
                    <div className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-4">1</div>
                        <div>
                            <h3 className="font-semibold mb-1">Connect Your Strava Account</h3>
                            <p className="text-gray-700">Securely link your Strava account through OAuth authentication</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-4">2</div>
                        <div>
                            <h3 className="font-semibold mb-1">Automatic Data Sync</h3>
                            <p className="text-gray-700">Your activities are automatically synced and processed</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-4">3</div>
                        <div>
                            <h3 className="font-semibold mb-1">View Leaderboards</h3>
                            <p className="text-gray-700">See your stats and rankings compared to other members</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-4">4</div>
                        <div>
                            <h3 className="font-semibold mb-1">Stay Motivated</h3>
                            <p className="text-gray-700">Track your progress and compete with friends</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
                <div className="bg-gray-100 p-6 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h3 className="font-semibold mb-2">Frontend</h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>React 18 with TypeScript</li>
                                <li>Tailwind CSS for styling</li>
                                <li>Flowbite UI components</li>
                                <li>ka-table for data tables</li>
                                <li>React Router for navigation</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">Backend</h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Go (Golang) REST API</li>
                                <li>MongoDB for data storage</li>
                                <li>Strava API integration</li>
                                <li>OAuth 2.0 authentication</li>
                                <li>Docker containerization</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Project Status</h2>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                    <p className="text-yellow-700 font-semibold mb-2">🚧 Currently in Beta Testing</p>
                    <p className="text-yellow-700">
                        This application is actively being developed and improved. We appreciate your patience 
                        as we work out any bugs and add new features. Your feedback is valuable in making 
                        this the best leaderboard experience possible!
                    </p>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Privacy & Security</h2>
                <div className="space-y-3">
                    <div className="flex items-start">
                        <span className="text-2xl mr-3">🔒</span>
                        <div>
                            <h3 className="font-semibold">Secure Authentication</h3>
                            <p className="text-sm text-gray-700">We use Strava's official OAuth 2.0 authentication - we never see your password</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <span className="text-2xl mr-3">🛡️</span>
                        <div>
                            <h3 className="font-semibold">Data Privacy</h3>
                            <p className="text-sm text-gray-700">We only access data you explicitly authorize and use it solely for leaderboard calculations</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <span className="text-2xl mr-3">✅</span>
                        <div>
                            <h3 className="font-semibold">Your Control</h3>
                            <p className="text-sm text-gray-700">You can revoke access and remove your data at any time through Strava settings</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Developer</h2>
                <div className="bg-gray-100 p-6 rounded-lg">
                    <p className="mb-4">
                        Strava Club Stats is developed and maintained by UnixCraft Development.
                    </p>
                    <p className="mb-4">
                        <strong>Website:</strong> <a href="https://www.unixcraft.dev" className="text-blue-600 hover:underline">www.unixcraft.dev</a>
                    </p>
                    <p className="text-sm text-gray-600">
                        Built with ❤️ for the cycling and running community
                    </p>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Acknowledgments</h2>
                <div className="space-y-3">
                    <div className="flex items-center">
                        <img 
                            src="https://developers.strava.com/images/api_logo_pwrdBy_strava_stack_gray.svg" 
                            alt="Powered by Strava"
                            className="h-12"
                        />
                    </div>
                    <p className="text-sm text-gray-600">
                        This application uses the Strava API. Strava and the Strava logo are trademarks of Strava, Inc.
                    </p>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Version Information</h2>
                <div className="bg-gray-100 p-4 rounded-lg text-sm">
                    <p><strong>Version:</strong> 2.0 Beta</p>
                    <p><strong>Last Updated:</strong> December 2024</p>
                    <p><strong>Frontend:</strong> React 18</p>
                    <p><strong>Backend:</strong> Go</p>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Get Involved</h2>
                <div className="bg-blue-50 p-6 rounded-lg">
                    <p className="mb-4">
                        We're always looking to improve! Here's how you can help:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Report bugs through the Help page</li>
                        <li>Suggest new features</li>
                        <li>Share feedback on your experience</li>
                        <li>Spread the word to your club members</li>
                    </ul>
                </div>
            </section>

            <div className="text-center py-8 border-t mt-8">
                <p className="text-gray-600 mb-4">
                    Thank you for using Strava Club Stats!
                </p>
                <div className="space-x-4">
                    <a href="/register" className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
                        Get Started
                    </a>
                    <a href="/documentation" className="inline-block bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition">
                        Read Docs
                    </a>
                </div>
            </div>
        </div>
    );
}
