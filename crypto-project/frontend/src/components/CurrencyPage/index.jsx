import Currency from '../Currency'

export default function CurrencyPage({ prices }) {
    let listContent = <p>Your currencies are loading...</p>

    if (prices.data) {
        listContent = prices.data[0].screen_data.crypto_data
            .map((price, i) => <Currency key={i} priceData={price}/>)
    }

    return (
        <>
            <img style={{ height: '300px', width: '100%', objectFit: 'cover' }} src="https://images.unsplash.com/photo-1640833906651-6bd1af7aeea3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNyeXB0b3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"></img>
            <div className="list text-white/80 block p-3">
                {listContent}
            </div>
        </>
    )
}