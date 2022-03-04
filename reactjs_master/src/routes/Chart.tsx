import { useQuery } from 'react-query'
import { fetchCoinHistory } from '../api'
import ApexChart from 'react-apexcharts'

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
    const { isLoading, data } = useQuery<IOhlcv[]>(['ohlcv', coinId], () => fetchCoinHistory(coinId))
    return (
        <div>
            {isLoading ? (
                'Loading Chart'
            ) : (
                <ApexChart
                    type="line"
                    series={[
                        {
                            name: 'Price',
                            data: data?.map(price => price.close),
                        },
                    ]}
                    options={{
                        theme: { mode: 'dark' },
                        chart: {
                            toolbar: { show: false },
                            width: 500,
                            height: 300,
                            background: 'transparents',
                        },
                        grid: { show: false },
                        yaxis: { show: false },
                        xaxis: {
                            labels: { show: false },
                            axisTicks: { show: false },
                            axisBorder: { show: false },
                            type: 'datetime',
                            categories: data?.map(price => price.time_close),
                        },
                        fill: {
                            type: 'gradient',
                            gradient: {
                                gradientToColors: ['#0be881'],
                                stops: [0, 100],
                            },
                        },
                        colors: ['#4bcffa'],
                        stroke: {
                            curve: 'smooth',
                            width: 4,
                        },
                        tooltip: {
                            // 마우스 올리면 보이는 UIs
                            y: {
                                formatter: value => `$${value.toFixed(2)}`,
                            },
                        },
                    }}
                />
            )}
        </div>
    )
}

export default Chart
