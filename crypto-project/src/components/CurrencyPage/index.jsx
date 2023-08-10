import Currency from '../Currency'

export default function CurrencyPage({ prices }) {
    console.log({prices})
    let listContent = <p>Your currencies are loading...</p>

    if (prices.length > 0) {
        listContent = prices
            .map((price, i) => <Currency key={i} priceData={price} />)
    }

    return (
        <div className="list">
            <h1>Currency Page</h1>
            {listContent}
        </div>
    )
}