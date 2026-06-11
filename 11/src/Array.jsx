import { useState } from "react"
export default function Array(){
    let [data,setData]= useState(["Lucky", "sah", "rohit"])
    let add=()=>{
        setData([...data, "BMW"])
    }
    return(
        <>
        <h1>{data.map((value)=>(
            <p>{value}</p> 
        ))}</h1>
        <button onClick={add}>Add</button>
        </>
    )
}