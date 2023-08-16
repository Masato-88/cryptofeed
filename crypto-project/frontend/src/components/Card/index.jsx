import { Link } from "react-router-dom";

export default function Card({ articleData, updateDetails }) {
    //Create variable to calculate the time difference
    const currentTime = new Date()
    const articleTime = new Date(articleData.date)
    const timeDifference = currentTime - articleTime

    let timeAgo = "";
    if (timeDifference < 60000) {
        timeAgo = "Just now";
    } else if (timeDifference < 3600000) {
        timeAgo = `${Math.floor(timeDifference / 60000)} minutes ago`;
    } else if (timeDifference < 86400000) {
        timeAgo = `${Math.floor(timeDifference / 3600000)} hours ago`;
    } else {
        timeAgo = `${Math.floor(timeDifference / 86400000)} days ago`;
    }

    return (
        <Link
            to={"/details"}
            onClick={() =>  updateDetails(articleData) }
            className="block p-3 border-b border-gray-200"
        >
            <figure className="text-white/75">
                <h2 className="font-bold">{articleData.title}</h2>
                <time className="card-date">{timeAgo}</time>
            </figure>
        </Link>
    )
}
