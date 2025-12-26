export function Register() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <h1 className="text-4xl font-bold mb-6 text-center">Register with Strava</h1>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <p className="text-lg mb-4">
                    Have your own dedicated Challenge Leaderboard! Connect your Strava account to enable your stats to be collected.
                </p>
            </div>

            <section className="mb-8 text-center">
                <h2 className="text-2xl font-semibold mb-4">Sign Up Here!</h2>
                <p className="mb-6">Connect your Strava account to this app to enable your stats to be collected.</p>
                
                <a href="/auth" className="inline-block">
                    <img 
                        alt="Connect with STRAVA" 
                        src="/images/btn_strava_connectwith_orange.png"
                        className="mx-auto hover:opacity-80 transition"
                    />
                </a>
            </section>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
                <h3 className="text-xl font-semibold mb-3">⚠️ Important Before Registering</h3>
                
                <div className="space-y-4">
                    <div>
                        <h4 className="font-semibold mb-2">1. Set Your Gender</h4>
                        <p className="text-sm">
                            The APP needs to know what group (Male/Female) to put you in. 
                            <strong> Please ensure your gender is set in your Strava profile.</strong>
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">2. Grant ALL Permissions</h4>
                        <p className="text-sm">
                            <strong>Please TICK ALL permission boxes.</strong> Without these permissions, 
                            the app cannot pull your data and the REGISTRATION WILL FAIL!!!
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">3. Wait for Processing</h4>
                        <p className="text-sm">
                            <strong>PLEASE WAIT 30 seconds for the page to load.</strong> 
                            DO NOT KEEP REGISTERING or refresh the page!
                        </p>
                    </div>
                </div>
            </div>

            <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-center">Need Help?</h3>
                <p className="text-center mb-4">
                    Read the documentation on how to register or de-register
                </p>
                <div className="flex justify-center">
                    <a 
                        href="/documentation" 
                        className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition font-semibold"
                    >
                        📚 View Documentation
                    </a>
                </div>
            </section>

            <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Registration Steps:</h3>
                <ol className="list-decimal list-inside space-y-2">
                    <li>Ensure your gender is set in your Strava profile</li>
                    <li>Click "Connect with STRAVA" button above</li>
                    <li>Grant ALL requested permissions</li>
                    <li>Wait 30 seconds for processing</li>
                    <li>You'll be redirected to a success page</li>
                    <li>Your activities will appear on the leaderboards within a few hours</li>
                </ol>
            </div>
        </div>
    );
}


