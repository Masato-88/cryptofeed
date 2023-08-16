import News from "../News";

export default function HomePage(props) {
    return (
        <div className="text-white/80 min-h-screen p-4">
            
            <h1 className="text-center text-2xl font-bold"> Welcome to Crypto Feed</h1>
            <h1 className="text-center text-2xl">Sign up and get started!</h1>

            <News
                
                articles={props.articles}
                updateDetails={props.setDetailsData}
            />
        </div>
    )
}