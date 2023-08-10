export default function Currency({ priceData }) {

    return (
        <>
            <figure>
                <h2>{priceData.data.screen_data.crypto_data.name}</h2>
                <h2>{priceData.data.screen_data.crypto_data.inst_price_usd}</h2>
            </figure>
        </>
    )
}