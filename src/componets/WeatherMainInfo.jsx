import React from 'react'
import { Loading } from './Loading';
import styles from './weatherApp.module.css'

export const WeatherMainInfo = ({weather}) => {
console.log("🚀 ~ file: WeatherMainInfo.jsx ~ line 6 ~ WeatherMainInfo ~ weather", weather)

    function IFrame() {
        return(
            <iframe src={`https://maps.google.com/?ll=${weather?.location.lat},${weather?.location.lon}&z=12&t=p&output=embed`} height="350" width='100%' frameBorder="0"  allowFullScreen></iframe>
        )
    }


  return (
    <div className={styles.mainInfo}>

        <div className={styles.city} >{weather?.location.name}</div>
        <div className={styles.country}>{weather?.location.country}</div>

        <div className={styles.row}>
            <div>
                <img src={`http:${weather?.current.condition.icon}`} width='128' alt={weather?.location.name} />
            </div>
        

        <div className={styles.condition}>
            <div>{weather?.current.condition.text}</div>
            <div className={styles.current}>{weather?.current.temp_c}°</div>
        </div>
        </div>

            <IFrame/>
    
    </div>
  )
}
