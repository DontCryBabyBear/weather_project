import { useState } from "react";
import useWeather from "./hooks/useWeather";
import Weather from "./components/Weather/Weather";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Error from "./components/Error/Error";

function App() {
  const [search, setSearch] = useState("belo horizonte");
  const weather = useWeather(search);
  
  console.log(weather)
  if (weather === undefined) {
    return (
      <div className="content">
        <Header />
        <Error  msg='...Loading' />
        <Footer/>
      </div>
    );
  }
  if (weather.error) {
    return (
      <div className="content">
        <Header setSearch={setSearch}/>
        <Error  msg={weather.msg} />
        <Footer/>
      </div>
    );
  }

  return (
    <div className="content">
      <Header setSearch={setSearch} />
      {weather && <Weather weather={weather.json} city={weather.city} />}
      <Footer />
    </div>
  );
}

export default App;
