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
