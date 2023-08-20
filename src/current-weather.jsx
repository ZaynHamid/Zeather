import axios from "axios"
import { useEffect, useState } from "react";
import moment from 'moment-timezone';
import tzLookup from 'tz-lookup';


const CurrentWeather = ({ city, }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [unit, setUnit] = useState("metric");
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
    const apiKey = "9d74092694e370aece0b666f6209c330";
    useEffect(() => {
        const fetchWeatherData = async () => {
            const cityName = city;
            try {
                const response = await axios.get(apiUrl, {
                    params: {
                        q: cityName,
                        units: unit,
                        appid: apiKey,
                    },
                });

                setWeatherData(response.data);
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }


        };


        fetchWeatherData();
    }, [city, unit]);

    return (
        <>
            {weatherData ?
                <>
                    <p className='md:text-lg'>Local Date & Time: {moment.unix(weatherData.dt).tz(tzLookup(weatherData.coord.lat, weatherData.coord.lon)).format("MMMM Do YYYY, H:mm a")}</p>
                    <h1 className='font-bold md:text-4xl text-2xl my-4 text-[#000]'>{weatherData.name}, {weatherData.sys.country}</h1>
                    <div className='flex w-2/3 justify-between my-6'>
                        <div className='flex gap-3 items-center'>
                            <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt="icon" />
                            <p className='font-bold text-lg md:text-3xl'>{Math.round(weatherData.main.temp.toFixed(2))}°{unit === "imperial" ? "F" : "C"}</p>
                        </div>
                        <div className='flex px-3 gap-4 items-center rounded-lg bg-[#f7f7f7] justify-end border'>
                            <div className='md:text-2xl text-lg font-semibold hover:opacity-60 cursor-pointer' onClick={() => setUnit("metric")}>C</div>
                            |
                            <div className='md:text-2xl text-lg font-semibold hover:opacity-60 cursor-pointer' onClick={() => setUnit("imperial")}>F</div>
                        </div>
                    </div>

                    <p className='mt-4 font-semibold md:text-xl text-lg capitalize'>Feels like {Math.round(weatherData.main.feels_like.toFixed(2))}°{unit === "imperial" ? "F" : "C"}. {weatherData.weather[0].description}</p>

                    <div className='flex gap-6 mt-5'>
                        <p className='md:text-lg font-semibold'>Humidity: {weatherData.main.humidity}%</p>
                        <p className='md:text-lg font-semibold'>Wind Speed: {weatherData.wind.speed} m/s</p>
                    </div>
                    <div className='flex gap-6 mt-3 '>
                        <p className='md:text-lg font-semibold'>Visibility: {weatherData.visibility}</p>
                        <p className='md:text-lg font-semibold'>Pressure: {weatherData.main.pressure}</p>
                    </div>
                </> : <p>Get started by searchin a city</p>
            }
        </>
    )


};

export default CurrentWeather;
