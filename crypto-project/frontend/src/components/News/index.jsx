import Card from '../Card'

export default function News({ articles, updateDetails }) {
    let newsContent = <p>Your article is loading...</p>

    if (articles.length) {
        newsContent = articles
            .map((article, i) => <Card key={i} articleData={article} updateDetails={updateDetails}/>)
    }

    return (
        <div className="news flex flex-col">
            {newsContent}
        </div>
    )
}