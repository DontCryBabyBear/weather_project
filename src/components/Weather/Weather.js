import { useState, useEffect } from "react";
import classes from "./Weather.module.css";
import imgs from "../../img/img";
function Weather({ weather, city }) {
    const [weatherBg, setWeatherBg] = useState({url : '', hex : '', bgSize : ''});
    useEffect(()=>{
        if(weather.main.temp <=6 ){
            setWeatherBg(imgs.coldest)
        }else
        if(weather.main.temp <= 15){
            setWeatherBg(imgs.cold)
        }else
        if(weather.main.temp <= 30){
            setWeatherBg(imgs.heat)
        }else
        if(weather.main.temp >30){
            setWeatherBg(imgs.hot)
        }
    },[weather])
  return (
    <div className={classes.content}>
      <section
        style={{
          backgroundImage: `url(${weatherBg.url})`,
          backgroundColor: weatherBg.hex,
          backgroundSize: weatherBg.bgSize,
        }}
      >
        {city}
      </section>

      <div className={classes.infos}>
        <p>Country - {weather.sys.country} °C</p>
        <p>max - {weather.main.temp_max} °C</p>
        <p>min - {weather.main.temp_min} °C</p>
        <p>{weather.main.temp} °C</p>
      </div>
    </div>
  );
}

export default Weather;
