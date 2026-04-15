import { useState, useEffect, useRef } from "react";

import React from 'react'

const Timer = () => {
    const [count,setCount] = useState(0);
    const intervalRef = useRef(null);

    useEffect(()=>{
        intervalRef.current = setInterval(()=>{
            setCount(prevCount => prevCount + 1)
        },1000)

        return () => {
            clearInterval(intervalRef.current)
        }
    },[])
    console.log(intervalRef)
  return (
    <div>
      <h1>Timer : {count} seconds</h1>
      <button onClick={()=>clearInterval(intervalRef.current)}>Stop Timer</button>
    </div>
  )
}

export default Timer;