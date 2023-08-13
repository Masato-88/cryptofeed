import CommentSection from '../CommentSection'


export default function DetailsPage(props) {
    return (

        <div>
            <div>
                <h1>Details page</h1>
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