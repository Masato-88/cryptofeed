import News from "../News";

export default function HomePage(props) {
    return (
        <>
            <h1>Home Page</h1>

            <News
                articles={props.articles}
                updateDetails={props.setDetailsData}
            />
        </>
    )
}