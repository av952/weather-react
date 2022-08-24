import { useEffect, useState } from "react";
import { WeatherForm } from "./WeatherForm";
import { WeatherMainInfo } from "./WeatherMainInfo";

import styles from './weatherApp.module.css'

export function WeatherApp() {
  const [weather, setWeather] = useState(null);
    

  useEffect(()=>{
    loadCity()
  },[])

    useEffect(()=>{

        document.title = `Weather | ${weather?.location.name ?? ''}`

    },[weather])


  function onChangeCity(city) {
    setWeather(null);
    loadCity(city);
  }

  async function loadCity(city = "London") {

    try {
      const request = await fetch(`${import.meta.env.VITE_URL}key=${
        import.meta.env.VITE_KEY
      }&q=${city}&aqi=no
      `);
      const json = await request.json();

      console.log(1, json);

      setWeather(json)
    } catch (error) {}
  }

  return (
    <div className={styles.weatherContainer}>
      <WeatherForm onChangeCity={onChangeCity} />
      <WeatherMainInfo weather={weather}/>
    </div>
  );
}
