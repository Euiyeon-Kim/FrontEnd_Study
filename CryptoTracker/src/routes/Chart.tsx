import { useQuery } from 'react-query'
import { fetchCoinHistory } from '../api'
import ApexChart from 'react-apexcharts'
import { useRecoilValue } from 'recoil'
import { isDarkAtom } from '../atoms'

interface IChartProps {
    coinId: string
}
interface IOhlcv {
    time_open: string
    time_close: string
    open: number
    high: number
    low: number
    close: number
    volume: number
    market_cap: number
}

function Chart({ coinId }: IChartProps) {
    const isDark = useRecoilValue(isDarkAtom)
    const { isLoading, data } = useQuery<IOhlcv[]>(['ohlcv', coinId], () => fetchCoinHistory(coinId))
    return (
        <div>
            {isLoading ? (
                'Loading Chart'
            ) : (
                <ApexChart
                    type="candlestick"
                    series={[
                        {
                            name: 'Price',
                            data: data?.map(price => {
                                return {
                                    x: price.time_close,
                                    y: [price.open.toFixed(2), price.high.toFixed(2), price.low.toFixed(2), price.close.toFixed(2)],
                                }
                            }),
                        },
                    ]}
                    options={{
                        theme: { mode: isDark ? 'dark' : 'light' },
                        chart: {
                            toolbar: { show: false },
                            width: 500,
                            height: 300,
                            background: 'transparents',
                        },
                        xaxis: {
                            type: 'datetime',
                            labels: { show: false },
                            axisTicks: { show: false },
                            axisBorder: { show: false },
                        },
                        yaxis: { show: false },
                        tooltip: {
                            x: {
                                format: 'dd MMM',
                            },
                        },
                    }}
                />
            )}
        </div>
    )
}

export default Chart
