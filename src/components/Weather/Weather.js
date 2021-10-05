import React from 'react'
import classes from './Weather.module.css'
function Weather({weather, city}) {
    return (
        <div className={classes.content}>

            <section>
                {city}
                <p>{weather.weather[0].description}</p>
            </section>

            <div className={classes.infos}>
            <p>Country - {weather.sys.country}</p>
                <p>max - {weather.main.temp_max}</p>
                <p>min - {weather.main.temp_min}</p>
                <p>{weather.main.temp} C</p>
            </div>
        </div>
    )
}

export default Weather
