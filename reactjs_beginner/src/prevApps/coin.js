import { useState, useEffect } from 'react'

function App() {
    const [loading, setLoading] = useState(true)
    const [coins, setCoins] = useState([])
    useEffect(() => {
        fetch('https://api.coinpaprika.com/v1/tickers')
            .then(response => response.json())
            .then(json => {
                setCoins(json)
                setLoading(false)
            })
    }, [])
    return (
        <div>
            <h1>The Coins! {loading ? 'LOADING' : coins.length}</h1>
            {loading ? (
                'Loading'
            ) : (
                <select>
                    {coins.map((coin, idx) => (
                        <option key={idx}>
                            {coin.name}({coin.symbol}): ${coin.quotes['USD'].price}
                        </option>
                    ))}
                </select>
            )}
        </div>
    )
}

export default App
