import { useRef, useState } from "react";
import styles from './weatherApp.module.css'


export const WeatherForm = ({onChangeCity}) => {
    const[city,setCity]= useState( )

    const inputref = useRef()


    function handler(e) {
        const value = e.target.value
        setCity(value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        onChangeCity(city)
        inputref.current.value =''
    }
    return(
        <form action="" onSubmit={handleSubmit} className={styles.caintainer}>
            <input ref={inputref} type="text" onChange={handler} className={styles.input} />
        </form>
    )
}
