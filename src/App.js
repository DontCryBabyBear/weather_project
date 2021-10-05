import {useState} from 'react'
import useWeather from "./hooks/useWeather";
import Weather from "./components/Weather/Weather";
function App() {
  const [search , setSearch] = useState('belo horizonte');
  const weather = useWeather(search)
 console.log('weather',weather)
 const onSearch = ({target})=>{
   setSearch(target.value)
 }
  return (
    <div >
      <input type='text' value={search} onChange={onSearch}/>
      {weather && <Weather weather={weather.json} city={weather.city} /> } 
    </div>
  );
}

export default App;
