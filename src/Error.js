import React from 'react'

const Error = ({ by }) => {
    return (
        <div className='container mx-auto'>
            <div className='md:w-2/3 mx-auto flex flex-col justify-center mt-16 items-center'>
                <h2 className='font-bold md:text-2xl text-xl'>No result was found by "{by}".</h2>
                <p className='md:w-1/2 md:px-0 px-2 md:text-lg my-2 text-center'>
                    Apologies, but we couldn't find any results for the city you entered. Please enter a valid city name and try once more.</p>
                <img src='https://cdn.svgator.com/images/2022/01/funny-404-error-page-design.gif' alt='404' className='w-[400]' />

            </div>
        </div>
    )
}

export default Error