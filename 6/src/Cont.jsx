import { useState } from "react"
export default function Cont(){
    let[count, setCount]= useState(0);
    function incCount(){
        setCount(count+1)
    }
    return(
        <>
    <h1>{count}</h1>
    <button onClick={incCount}>Inc Count</button>
        </>
    )
}