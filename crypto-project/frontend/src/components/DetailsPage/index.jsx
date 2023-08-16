import { Link } from 'react-router-dom'
import CommentSection from '../CommentSection'


export default function DetailsPage(props) {
    return (

        <>
        <img style={{ height: '250px', width: '100%', objectFit: 'cover' }} src="https://images.unsplash.com/photo-1554228243-ff1759819ed3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTczfHxjcnlwdG8lMjBuZXdzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"></img>
        <div className="text-white/75 text-center min-h-screen flex flex-col items-center py-10">
            <div className="max-w-2xl px-6">
                <h1 className="text-3xl font-semibold mb-4">{props.title}</h1>
                <p className="text-lg mb-6">{props.description}</p>
                <p>
                    <Link 
                        to={props.url} 
                        target="_blank" 
                        rel="noopener no referrer"
                        className="text-blue-400 hover:underline">
                        Read the full story
                    </Link>
                </p>
            </div>
            <CommentSection data={props}/>
        </div>
        </>
    )
}