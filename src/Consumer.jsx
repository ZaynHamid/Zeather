import React from 'react'
import { MyContext } from './dailyForecastChart';

export const Consumer = () => {
    return (
        <MyContext.Consumer>
            {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis dataKey="temp" />
                    <Tooltip />
                    <Line type="basis" dataKey="temp" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </div> */}
            {dailyTemperature => console.log(dailyTemperature)}
        </MyContext.Consumer>
    )
}
