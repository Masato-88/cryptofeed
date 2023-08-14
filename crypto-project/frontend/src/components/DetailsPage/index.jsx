import CommentSection from '../CommentSection'


export default function DetailsPage(props) {
    return (

        <div className="text-white/75">
            <div>
                
                <h1>{props.title}</h1>
                <h2>{props.description}</h2>
                <h2>Get full story here: {props.url}</h2>
            </div>
            <CommentSection 
                data={props}
            
            />
        </div>
    )
}