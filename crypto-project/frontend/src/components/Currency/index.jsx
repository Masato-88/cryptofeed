export default function Currency({ priceData }) {
console.log(priceData)
    return (
        <>
            <figure>
                <h2 className="content-space-around">
                    {priceData.name} {priceData.change_percent_1d} ${priceData.inst_price_usd}
                </h2>
            </figure>
        </>
    )
}