import { useState, useEffect } from "react";
import useGeo from "./useGeo";
const token = "7d18326dc8f17f3dcdbc16da7a7d68ab";

function useWeather(city) {
  const geo = useGeo(city);
  const [weather, setWeather] = useState();
  useEffect(() => {
    if (geo === "Local não encontrado!") {
      return setWeather({ error: true, msg: geo });
    }
    const requestWeather = async () => {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${geo.latitude}&lon=${geo.longitude}&appid=${token}&units=metric`
      );
      const json = await response.json();
      return await json;
    };
    requestWeather()
      .then((json) => setWeather({ json, city: geo.city, error: false }))
      .catch((e) => setWeather({ error: true, msg: "Verifique sua conexão" }));
  }, [geo, city]);
  return weather;
}

export default useWeather;
