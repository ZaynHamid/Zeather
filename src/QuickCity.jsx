import React from 'react';

const QuickCity = ({ setQuickCity }) => {
    const handleCityClick = (city) => {
        setQuickCity(city); // Update the quickCity state with the clicked city
    };

    return (
        <div>
            <div className='flex justify-center md:gap-6 gap-3 my-8'>
                <div onClick={() => handleCityClick('lahore')} className='capitalize font-semibold border-2 shadow-lg text-white md:px-4 px-3 bg-[#1d1d1f] py-1 cursor-pointer hover:text-black hover:bg-[#f9f9f9] transition-all duration-150 rounded-lg'>lahore</div>
                <div onClick={() => handleCityClick('berlin')} className='capitalize font-semibold border-2 shadow-lg text-white md:px-4 px-3 bg-[#1d1d1f] py-1 cursor-pointer hover:text-black hover:bg-[#f9f9f9] transition-all duration-150 rounded-lg'>berlin</div>
                <div onClick={() => handleCityClick('new york')} className='capitalize font-semibold border-2 shadow-lg text-white md:px-4 px-3 bg-[#1d1d1f] py-1 cursor-pointer hover:text-black hover:bg-[#f9f9f9] transition-all duration-150 rounded-lg'>new york</div>
                <div onClick={() => handleCityClick('delhi')} className='capitalize font-semibold border-2 shadow-lg text-white md:px-4 px-3 bg-[#1d1d1f] py-1 cursor-pointer hover:text-black hover:bg-[#f9f9f9] transition-all duration-150 rounded-lg'>delhi</div>
            </div>
        </div>
    );
};

export default QuickCity;
