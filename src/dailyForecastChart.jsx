import axios from 'axios';
import React, { useEffect, useState } from 'react';

import DailyForecast from './daily-forecast';
import Chart from './Chart';
import CurrentWeather from './current-weather';
import StartScreen from './StartScreen';
import Error from './Error';
const data = [
    {
        name: 'Sat',
        temp: 30
    },
    {
        name: 'Sun',
        temp: 28
    },
    {
        name: 'Mon',
        temp: 32
    },

    {
        name: 'Tues',
        temp: 31
    },
    {
        name: 'Wed',
        temp: 33
    },

    {
        name: 'Thur',
        temp: 24
    },


];
const HourlyForecast = ({ city, currentSearch }) => {
    const apiUrl = "https://api.openweathermap.org/data/2.5/forecast";
    const appid = "119df548005d72d2a3f256f16cff7054";

    const [dailyTemperatures, setDailyTemperatures] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!city) {
                    return <></>;
                } else {
                    setError(null);
                }

                const response = await axios.get(apiUrl, {
                    params: {
                        appid: appid,
                        q: city,
                        units: 'metric',
                    }
                });

                const dataList = response.data.list;
                const dailyData = {};

                dataList.forEach(item => {
                    const date = item.dt_txt.split(' ')[0];
                    if (!dailyData[date]) {
                        dailyData[date] = {
                            temperatures: [],
                            weather: []
                        };
                    }
                    dailyData[date].temperatures.push(item.main.temp);
                    dailyData[date].weather.push({
                        description: item.weather[0].description,
                        icon: item.weather[0].icon
                    });
                });


                const averageTemps = Object.keys(dailyData).map(date => {

                    const temps = dailyData[date].temperatures;
                    const averageTemp = temps.reduce((sum, temp) => sum + temp, 0) / temps.length;
                    const icons = dailyData[date].weather;
                    const desc = dailyData[date].weather;
                    return { date, averageTemp, icons, desc };
                })


                setDailyTemperatures(averageTemps);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchData();
    }, [city]);

    if (loading) {
        return <StartScreen />
    }

    if (error) {
        return <Error by={city} />;
    }
    const modifiedData = data.map((item, i) => {
        if (dailyTemperatures[i]) {
            item.temp = Math.round(dailyTemperatures[i].averageTemp);
            const date = new Date(dailyTemperatures[i].date);
            const dayOfWeekIndex = date.getDay();
            item.date = daysOfWeek[dayOfWeekIndex];
        }
        return item;
    });


    return (
        <>
            {!loading ?
                <div className="md:w-[60%] px-4 md:gap-6 gap-3 mx-auto lg:flex mt-16">
                    <div className="lg:w-1/2 w-full">
                        <CurrentWeather city={currentSearch} /><br /><br />
                        <Chart data={modifiedData} />
                        <br /><br />
                    </div>
                    <div className="lg:w-1/2 w-full border-2">
                        <DailyForecast dailyTemperatures={dailyTemperatures} />
                    </div>
                </div> : <></>}

        </>
    )

}


export default HourlyForecast;