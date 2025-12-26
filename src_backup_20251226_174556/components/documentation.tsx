export function Documentation() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <h1 className="text-4xl font-bold mb-6">Documentation</h1>
            
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
                <p className="mb-4">
                    Welcome to Strava Club Stats! This application helps you track and compare your cycling and running activities with other club members.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">How to Register</h2>
                
                <div className="mb-6">
                    <img src="/images/docs/registration-step1.svg" alt="Registration Step 1" className="w-full rounded-lg shadow-lg border border-gray-200" />
                    <p className="text-sm text-gray-600 mt-2 text-center italic">Step 1: Click "Connect with STRAVA" button</p>
                </div>
                
                <div className="bg-gray-100 p-6 rounded-lg mb-4">
                    <ol className="list-decimal list-inside space-y-3">
                        <li>Click on the "Register" link in the navigation menu</li>
                        <li>Click on "Connect with STRAVA" button</li>
                        <li>You will be redirected to Strava's authorization page</li>
                        <li>
                            <strong>IMPORTANT:</strong> Make sure to tick ALL permission boxes:
                            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                                <li>View data about your activities</li>
                                <li>View data about your private activities</li>
                                <li>View your profile information</li>
                            </ul>
                        </li>
                        <li>Click "Authorize" to complete the registration</li>
                        <li>Wait 30 seconds for the registration to complete (do NOT refresh or click back)</li>
                        <li>You will be redirected to a success page once registration is complete</li>
                    </ol>
                </div>
                
                <div className="mb-6">
                    <img src="/images/docs/strava-permissions.svg" alt="Strava Authorization Page" className="w-full rounded-lg shadow-lg border border-gray-200" />
                    <p className="text-sm text-gray-600 mt-2 text-center italic">Step 2: Grant all permissions on Strava's authorization page</p>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                    <p className="text-yellow-700">
                        <strong>⚠️ Important Notes:</strong>
                    </p>
                    <ul className="list-disc list-inside ml-4 mt-2 text-yellow-700">
                        <li>Without all permissions, the app CANNOT pull your data and registration WILL FAIL</li>
                        <li>Please wait 30 seconds after authorization - the system needs time to fetch your data</li>
                        <li>DO NOT register multiple times - this can cause data issues</li>
                    </ul>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Profile Requirements</h2>
                <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-semibold mb-2">Gender Setting</h3>
                    <p className="mb-4">
                        The app needs to know your gender (Male/Female) to place you in the correct leaderboard group. 
                        Please ensure your gender is properly set in your Strava profile settings.
                    </p>
                    <p className="text-sm text-gray-600">
                        To update: Go to Strava → Settings → My Profile → Gender
                    </p>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">How to De-register</h2>
                <div className="bg-gray-100 p-6 rounded-lg">
                    <p className="mb-4">
                        If you wish to remove your data from the leaderboard and revoke access:
                    </p>
                    <ol className="list-decimal list-inside space-y-2">
                        <li>Log in to your Strava account</li>
                        <li>Go to Settings → My Apps</li>
                        <li>Find "Strava Club Stats" in the list of authorized applications</li>
                        <li>Click "Revoke Access"</li>
                        <li>Your data will be removed from the leaderboard within 24 hours</li>
                    </ol>
                    <p className="mt-4 text-sm text-gray-600">
                        Note: You can re-register at any time by following the registration process again.
                    </p>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Understanding the Leaderboards</h2>
                
                <div className="mb-6">
                    <img src="/images/docs/leaderboard-example.svg" alt="Leaderboard Example" className="w-full rounded-lg shadow-lg border border-gray-200" />
                    <p className="text-sm text-gray-600 mt-2 text-center italic">Example leaderboard with sorting, filtering, and pagination features</p>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 mt-6">Cycling Leaderboards</h3>
                <div className="mb-4">
                    <h4 className="font-semibold mb-2">Monthly Leaderboard</h4>
                    <p className="mb-2">Shows cycling statistics for the selected month, including:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Total Distance</li>
                        <li>Outdoor Distance</li>
                        <li>Indoor Distance (virtual rides)</li>
                        <li>Percentage Indoor</li>
                        <li>Total Elevation Gain</li>
                    </ul>
                </div>

                <div className="mb-4">
                    <h4 className="font-semibold mb-2">Yearly Leaderboard</h4>
                    <p>Shows cycling statistics for the entire selected year with the same metrics as the monthly leaderboard.</p>
                </div>

                <h3 className="text-xl font-semibold mb-3 mt-6">Running Leaderboards</h3>
                <div className="mb-4">
                    <p className="mb-2">Shows running statistics for the selected month, including:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Total Distance</li>
                        <li>Total Elevation Gain</li>
                    </ul>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Using the Date Picker</h2>
                
                <div className="mb-6">
                    <img src="/images/docs/date-picker.svg" alt="Date Picker" className="w-full max-w-2xl mx-auto rounded-lg shadow-lg border border-gray-200" />
                    <p className="text-sm text-gray-600 mt-2 text-center italic">Use the date picker to navigate between months and years</p>
                </div>
                
                <div className="bg-gray-100 p-6 rounded-lg">
                    <p className="mb-2">
                        Use the date picker at the top of the page to select different months or years:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>For monthly leaderboards: Select a specific month and year</li>
                        <li>For yearly leaderboards: Select a year</li>
                        <li>Data is automatically refreshed when you change the date</li>
                    </ul>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Table Features</h2>
                <div className="space-y-4">
                    <div>
                        <h3 className="font-semibold mb-2">Sorting</h3>
                        <p>Click on any column header to sort by that column. Click again to reverse the sort order.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Filtering</h3>
                        <p>Use the filter row at the top of the table to search for specific athletes by name.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Pagination</h3>
                        <p>Use the pagination controls at the bottom to navigate through pages. You can also change the number of rows displayed per page.</p>
                    </div>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
                <div className="space-y-4">
                    <div>
                        <h3 className="font-semibold mb-2">Q: How often is data updated?</h3>
                        <p>A: Data is typically updated every few hours. New activities may take some time to appear on the leaderboard.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Q: Why isn't my latest activity showing?</h3>
                        <p>A: Make sure your activity is not set to private in Strava. Only public or followers-only activities are included.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Q: Can I see historical data?</h3>
                        <p>A: Yes! Use the date picker to select any previous month or year to view historical leaderboards.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Q: What counts as indoor vs outdoor cycling?</h3>
                        <p>A: Indoor cycling includes virtual rides on platforms like Zwift, TrainerRoad, etc. Outdoor cycling is any ride recorded outdoors with GPS.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Q: I'm having issues with registration, what should I do?</h3>
                        <p>A: Make sure you've granted all permissions and waited the full 30 seconds. If issues persist, try revoking access and re-registering. If problems continue, contact us through the Help page.</p>
                    </div>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Privacy & Data</h2>
                <div className="bg-gray-100 p-6 rounded-lg">
                    <p className="mb-4">
                        We take your privacy seriously:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>We only access data you explicitly authorize</li>
                        <li>Your data is used solely for leaderboard calculations</li>
                        <li>We do not share your data with third parties</li>
                        <li>You can revoke access and remove your data at any time</li>
                        <li>Only your name and statistics are displayed publicly on the leaderboard</li>
                    </ul>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Mobile Usage</h2>
                <p>
                    This website is fully responsive and works great on mobile devices. All features including 
                    table sorting, filtering, and date selection are optimized for touch screens.
                </p>
            </section>
        </div>
    );
}
