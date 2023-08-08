import Card from '../Card'

export default function Gallery({ articles }) {
    return (
        <div className="gallery">
            {articles.length > 0 ? articles.map(article => <Card key={article.id} articleData={article} />) : <p>Your article is loading...</p>}
        </div>
    )
}