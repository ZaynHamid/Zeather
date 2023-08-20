import React from 'react'
import Zeather from "./assets/zeather.png";
import { Image } from 'cloudinary-react';

const StartScreen = () => {
    return (
        <div className='container mx-auto'>
            <p className='mt-12 text-2xl md:w-9/12 mx-auto font-bold md:px-0 px-6'>Type the city name to get things started!</p>

            <div className='lg:flex mt-6 md:w-9/12 mx-auto justify-center gap-10 md:px-0 px-6'>
                <div className='lg:w-1/2'>
                    <h1 className='font-semibold md:text-2xl text-xl my-4'>About Zeather</h1>
                    <p className='md:text-lg'>Zeather fetches real-time weather data from OpenWeatherAPI and presents users with detailed daily forecasts. Users can input their location, and the application will show essential weather parameters such as temperature, humidity, wind speed, and precipitation chances. This information is presented in an easily understandable format for quick comprehension.                    </p><br />
                </div>
                <div className='lg:w-1/2 my-4 lg:my-0'>
                    <Image src={Zeather} alt='demo' className='border shadow-xl' />
                </div>
            </div>

        </div>
    )
}

export default StartScreen