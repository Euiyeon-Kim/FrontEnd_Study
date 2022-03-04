import { IPrice } from './Coin'
import ApexChart from 'react-apexcharts'

interface IPriceProps {
    price: IPrice | undefined
}
function Price({ price }: IPriceProps) {
    console.log(price)
    return (
        <div>
            <ApexChart
                type="bar"
                series={[
                    {
                        name: 'Percent Change',
                        data: [
                            price?.quotes.USD.percent_change_15m,
                            price?.quotes.USD.percent_change_30m,
                            price?.quotes.USD.percent_change_1h,
                            price?.quotes.USD.percent_change_6h,
                            price?.quotes.USD.percent_change_12h,
                            price?.quotes.USD.percent_change_24h,
                            price?.quotes.USD.percent_change_7d,
                            price?.quotes.USD.percent_change_30d,
                            price?.quotes.USD.percent_change_1y,
                        ],
                    },
                ]}
                options={{
                    theme: { mode: 'dark' },
                    chart: {
                        type: 'bar',
                        toolbar: { show: false },
                        height: 300,
                        background: 'transparents',
                    },
                    plotOptions: {
                        bar: {
                            borderRadius: 4,
                            horizontal: true,
                        },
                    },
                    colors: ['#778beb'],
                    xaxis: {
                        labels: { show: false },
                        axisTicks: { show: false },
                        axisBorder: { show: false },
                        categories: ['15m', '30m', '1h', '6h', '12h', '24h', '7d', '30d', '1y'],
                    },
                    yaxis: { show: false },
                    grid: { show: false },
                }}
            />
        </div>
    )
}
export default Price
