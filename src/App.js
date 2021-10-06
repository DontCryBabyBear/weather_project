import { useState } from "react";
import useWeather from "./hooks/useWeather";
import Weather from "./components/Weather/Weather";
import "./App.css";
import Search from "./components/search/Search";

function App() {
  const [search, setSearch] = useState("belo horizonte");
  const weather = useWeather(search);
  console.log(weather);

  if (weather === undefined) {
    return <p>Loading...</p>;
  } else if (weather.error) {
    return <p>{weather.msg}</p>;
  }
  return (
    <div className="content">
      <Search setSearch={setSearch} />
      {weather && <Weather weather={weather.json} city={weather.city} />}
    </div>
  );
}

export default App;
