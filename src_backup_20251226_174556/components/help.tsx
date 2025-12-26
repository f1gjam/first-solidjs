export function Help() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <h1 className="text-4xl font-bold mb-6">Help & Support</h1>
            
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
                <p className="mb-4">
                    We're here to help! If you're experiencing issues or have questions, 
                    please check the resources below or contact us.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    <a href="/documentation" className="block p-6 bg-blue-50 hover:bg-blue-100 rounded-lg transition">
                        <h3 className="text-xl font-semibold mb-2">📚 Documentation</h3>
                        <p className="text-gray-700">Complete guide on how to use the leaderboard system</p>
                    </a>
                    <a href="/register" className="block p-6 bg-green-50 hover:bg-green-100 rounded-lg transition">
                        <h3 className="text-xl font-semibold mb-2">✅ Registration</h3>
                        <p className="text-gray-700">Sign up and connect your Strava account</p>
                    </a>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Common Issues</h2>
                
                <div className="space-y-6">
                    <div className="border-l-4 border-blue-500 pl-4">
                        <h3 className="font-semibold mb-2">Registration Failed</h3>
                        <p className="mb-2">If your registration didn't complete:</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>Ensure you checked ALL permission boxes</li>
                            <li>Wait the full 30 seconds after authorization</li>
                            <li>Check that your Strava profile has your gender set</li>
                            <li>Try revoking access in Strava settings and re-registering</li>
                        </ul>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4">
                        <h3 className="font-semibold mb-2">Activities Not Showing</h3>
                        <p className="mb-2">If your activities aren't appearing:</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>Check that activities are not set to private in Strava</li>
                            <li>Wait a few hours - data syncs periodically</li>
                            <li>Verify you're looking at the correct date range</li>
                            <li>Ensure the activity type is cycling or running</li>
                        </ul>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4">
                        <h3 className="font-semibold mb-2">Table Not Loading</h3>
                        <p className="mb-2">If the leaderboard table isn't displaying:</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>Refresh the page</li>
                            <li>Clear your browser cache</li>
                            <li>Try a different browser</li>
                            <li>Check your internet connection</li>
                        </ul>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4">
                        <h3 className="font-semibold mb-2">Mobile Display Issues</h3>
                        <p className="mb-2">If the site isn't displaying correctly on mobile:</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>Try rotating your device to landscape mode</li>
                            <li>Scroll horizontally to see all table columns</li>
                            <li>Update your mobile browser to the latest version</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Troubleshooting Steps</h2>
                <div className="bg-gray-100 p-6 rounded-lg">
                    <p className="font-semibold mb-3">Before contacting support, please try these steps:</p>
                    <ol className="list-decimal list-inside space-y-2">
                        <li>Clear your browser cache and cookies</li>
                        <li>Try using an incognito/private browsing window</li>
                        <li>Disable browser extensions temporarily</li>
                        <li>Try a different web browser (Chrome, Firefox, Safari, Edge)</li>
                        <li>Check if Strava itself is working properly</li>
                        <li>Verify your internet connection is stable</li>
                    </ol>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
                <div className="bg-blue-50 p-6 rounded-lg">
                    <p className="mb-4">
                        If you've tried the troubleshooting steps above and still need help, please contact us:
                    </p>
                    <div className="space-y-3">
                        <div>
                            <h3 className="font-semibold">Email Support</h3>
                            <p className="text-blue-600">support@unixcraft.dev</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Response Time</h3>
                            <p>We typically respond within 24-48 hours</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">When contacting support, please include:</h3>
                            <ul className="list-disc list-inside ml-4 mt-2">
                                <li>Your Strava username or athlete ID</li>
                                <li>Description of the issue</li>
                                <li>Steps you've already tried</li>
                                <li>Browser and device information</li>
                                <li>Screenshots if applicable</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">System Status</h2>
                <div className="bg-green-50 p-6 rounded-lg">
                    <p className="flex items-center">
                        <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                        <strong>All systems operational</strong>
                    </p>
                    <p className="mt-2 text-sm text-gray-600">
                        Last updated: Check back regularly for status updates
                    </p>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Report a Bug</h2>
                <div className="bg-yellow-50 p-6 rounded-lg">
                    <p className="mb-4">
                        Found a bug? We appreciate your help in making the site better!
                    </p>
                    <p className="mb-2">
                        Please email us at <span className="text-blue-600 font-semibold">bugs@unixcraft.dev</span> with:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Detailed description of the bug</li>
                        <li>Steps to reproduce the issue</li>
                        <li>Expected vs actual behavior</li>
                        <li>Screenshots or screen recordings</li>
                        <li>Browser and operating system details</li>
                    </ul>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Feature Requests</h2>
                <p className="mb-4">
                    Have an idea for a new feature? We'd love to hear from you! Send your suggestions to:
                </p>
                <p className="text-blue-600 font-semibold">
                    features@unixcraft.dev
                </p>
            </section>

            <div className="bg-gray-100 p-6 rounded-lg mt-8 text-center">
                <p className="text-gray-600">
                    This is a beta service. We're continuously working to improve the experience. 
                    Thank you for your patience and feedback!
                </p>
            </div>
        </div>
    );
}
