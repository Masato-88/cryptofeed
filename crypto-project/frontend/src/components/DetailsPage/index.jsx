// import CommentSection from '../CommentSection'


export default function DetailsPage({ title, description, url, date }) {
    return (
        <div>
            <h1>Details page</h1>
            <h2>{title}</h2>
            <p>{description} {url} {date}</p>
        </div>
    )
}