import Currency from '../Currency'

export default function CurrencyPage({ prices }) {
    console.log(prices.data)
    let listContent = <p>Your currencies are loading...</p>

    if (prices.data) {
        listContent = prices.data[0].screen_data.crypto_data
            .map((price, i) => <Currency key={i} priceData={price}/>)
    }

    return (
        <div className="list">
            <h1>Currency Page</h1>
            {listContent}
        </div>
    )
}