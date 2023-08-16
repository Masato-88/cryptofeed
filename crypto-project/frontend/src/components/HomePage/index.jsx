import News from "../News";
import "tailwindcss/tailwind.css";

export default function HomePage(props) {
    return (
        <>
            <img style={{ height: '250px', width: '100%', objectFit: 'cover' }} src="https://images.unsplash.com/photo-1609554496796-c345a5335ceb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"></img>
            <div className="text-white/80 min-h-screen p-4">               
                <h1 className="text-center text-4xl font-bold p-4"> Welcome to Crypto Feed</h1>
                <h1 className="text-left text-4xl p-1 px-2">News</h1>
                <News 
                    articles={props.articles}
                    updateDetails={props.setDetailsData}
                />
            </div>
        </>
    )
}