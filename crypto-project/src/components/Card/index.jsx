export default function Card({ articleData, updateDetails }) {
    return (
        <>
            <figure onClick={() =>  updateDetails(articleData) }>
                <h2>{articleData.title}</h2>
                <h2>{articleData.date}</h2>
            </figure>
        </>
    )
}
