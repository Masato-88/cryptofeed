export default function Currency({ priceData }) {
    const isNegativeChange = parseFloat(priceData.change_percent_1d) < 0;

    return (
        <>
            <figure className="border-b border-gray-200/25 flex justify-between p-2">
                <h2 className="inline">
                    {priceData.name}
                </h2>
                <div>
                    <p>
                        ${priceData.inst_price_usd} 
                        <span className={isNegativeChange ? 'text-red-500' : 'text-green-500'}>
                            <span className="text-sm p-1">
                                ({priceData.change_percent_1d})
                            </span>
                        </span>
                    </p>
                </div>
            </figure>
        </>
    )
}