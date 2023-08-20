import React from 'react'

const DailyWeather = ({ date, desc, icon, temp }) => {
    return (
        <div className='flex justify-between items-center w-full md:p-8 p-4 flex-wrap'>
            <div className='md:text-lg font-semibold'>Date: {date}</div>
            <div className='flex gap-3 items-center'>
                <img src={icon} alt='icon' />
                <p className='font-bold text-xl'>{Math.round(temp)}°C</p>
            </div>
            <div className='md:text-lg font-semibold capitalize'>{desc}</div>
        </div>
    )
}

export default DailyWeather