import { useEffect, useState } from "react";

const token ="pk.eyJ1IjoiaXZhbnNkZmciLCJhIjoiY2t1YTdmOTloMGUzcDJxcWowYjJlNzF3ZCJ9.9xTQbqeFfpN8kXGRWH6Tqg";
function useGeo(city) {
  const [geo, setGeo] = useState();

  useEffect(() => {
    const requestApi = async () => {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${token}`
      );
      const json = await response.json();
      return await json;
    };
    requestApi().then((json) => setGeo({
        latitude: json.features[0].center[1],
        longitude: json.features[0].center[0],
        city : json.features[0].place_name
    })).catch((e)=>setGeo('Place not found, check and try again!'))
  }, [city]);

  if(geo)
  return geo;
}

export default useGeo;