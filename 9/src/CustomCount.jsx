import { useState } from "react"

export default function CustomCounter(){
    let [count, setCount]= useState(0);

    let incCount= ()=>{
        setCount(count+1)
    }

    let decCount= ()=>{
        setCount(count-1);
    }

    let reset=()=>{
        setCount(0)
    }
    
    return(
        <>
        <h1>{count}</h1>
        <button onClick={incCount}>Inc Count</button>
        <button onClick={decCount}>Dec Count</button>
        <button onClick={reset}>Reset</button>
        </>
    )
}