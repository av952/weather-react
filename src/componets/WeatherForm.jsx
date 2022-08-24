import { useState } from "react";
import styles from './weatherApp.module.css'


export const WeatherForm = ({onChangeCity}) => {
    const[city,setCity]= useState( )


    function handler(e) {
        const value = e.target.value
        setCity(value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        onChangeCity(city)
    }
    return(
        <form action="" onSubmit={handleSubmit} className={styles.caintainer}>
            <input type="text" onChange={handler} className={styles.input} />
        </form>
    )
}
