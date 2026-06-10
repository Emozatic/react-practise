import { useState } from "react"
export default function Cont(){
    let[count, setCount]= useState(0);
    function incCount(){
        setCount((currValue)=>{
            console.log(currValue);
            return currValue+1
        });

        setCount((currValue)=>{
            console.log(currValue);
            return currValue+1;
        })
    }
    return(
        <>
    <h1>{count}</h1>
    <button onClick={incCount}>Inc Count</button>
        </>
    )
}