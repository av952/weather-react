import { useEffect, useState } from "react";
import { WeatherForm } from "./WeatherForm";
import { WeatherMainInfo } from "./WeatherMainInfo";
import imgGit from "../assets/github.svg";

import styles from "./weatherApp.module.css";
import { Loading } from "./Loading";

export function WeatherApp() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadCity();
  }, []);

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ""}`;
  }, [weather]);

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
      setTimeout(() => {
        setWeather(json);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className={styles.logoContainer}>
        <img src={imgGit} alt="gitimg" className={styles.logo} />
        <p><a href="https://github.com/av952/weather-react" target='_blank' >by Alejandro V.</a></p>
      </div>

      <div className={styles.weatherContainer}>
        <WeatherForm onChangeCity={onChangeCity} />
        {weather ? <WeatherMainInfo weather={weather} /> : <Loading />}
      </div>
    </>
  );
}
