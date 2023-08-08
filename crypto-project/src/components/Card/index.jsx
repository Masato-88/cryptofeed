export default function Card({ articleData }) {
    return (
        <>
            <figcaption>
                <h2>{articleData.title}</h2>
                <h2>{articleData.date}</h2>
            </figcaption>
        </>
    )
}