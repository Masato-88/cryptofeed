export default function Currency({ priceData }) {

    return (
        <>
            <figure>
                <h2 className="content-space-evenly">
                    {priceData.name} {priceData.change_percent_1d} ${priceData.inst_price_usd}
                </h2>
            </figure>
        </>
    )
}