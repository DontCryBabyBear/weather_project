import { useState } from "react";
import useWeather from "./hooks/useWeather";
import Weather from "./components/Weather/Weather";
import "./App.css";
import Header from "./components/header/Header";

function App() {
  const [search, setSearch] = useState("belo horizonte");
  const weather = useWeather(search);
  if (weather === undefined) {
    return (
      <div className="content">
        <Header/>
        loading....
      </div>
    );
  }
  if (weather.error) {
    return (
      <div className="content">
        <Header  setSearch={setSearch} />
        {weather.msg}
      </div>
    );
  }

  return (
    <div className="content">
      <Header setSearch={setSearch} />
      {weather && <Weather weather={weather.json} city={weather.city} />}
    </div>
  );
}

export default App;
