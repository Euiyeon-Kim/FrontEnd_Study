const BASEURL = 'https://api.coinpaprika.com/v1'
export function fetchCoins() {
    return fetch(`${BASEURL}/coins`).then(response => response.json())
}

export function fetchCoinInfo(coinId: string) {
    return fetch(`${BASEURL}/coins/${coinId}`).then(response => response.json())
}

export function fetchCoinPrice(coinId: string) {
    return fetch(`${BASEURL}/tickers/${coinId}`).then(response => response.json())
}

export function fetchCoinHistory(coinId: string) {
    const endDate = Math.floor(Date.now() / 1000)
    const startDate = endDate - 60 * 60 * 24 * 14 // 2 weeks
    return fetch(`${BASEURL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`).then(response => response.json())
}
