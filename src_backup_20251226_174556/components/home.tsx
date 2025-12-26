export function Home() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">STRAVA CLUB STATS BETA SITE</h1>
                <p className="text-lg mb-4">Welcome to the Strava Club Stats Leaderboard</p>
                <p className="mb-4">Select a leaderboard from the menu above to view statistics.</p>
                <img 
                    alt="Powered by STRAVA" 
                    className="mx-auto mt-8" 
                    src="https://developers.strava.com/images/api_logo_pwrdBy_strava_stack_gray.svg"
                    style={{ maxWidth: '200px' }}
                />
            </div>
        </div>
    );
}


