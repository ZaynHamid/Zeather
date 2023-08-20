import DailyWeather from "./dailyWeather"

const DailyForecast = ({ dailyTemperatures }) => {
    return (<>
        {dailyTemperatures ? dailyTemperatures.map((val, i) => (
            <DailyWeather
                temp={val.averageTemp.toFixed(2)}
                date={val.date}
                key={i}
                desc={val.desc && val.desc[i] ? val.desc[i].description : ""}
                icon={`https://openweathermap.org/img/wn/${val.icons && val.icons[i] ? val.icons[i].icon : ""}.png`}
            />
        )) : <></>}
    </>


    )
}

export default DailyForecast
