import { useState } from "react"
import { v4 as uuidv4 } from "uuid";
export default function Array(){
    let[data,setData]= useState(["Lucky","Rohit", "Mohit"])

    let add=()=>{
        setData((prevData)=>{
            return([...prevData, "BMW"])
        })
        setData((prevData)=>{
            return([...prevData, "Audi"])
        })
    };

    let deleteBtn=()=>{
        setData((prevData)=>{
            return (prevData.slice(0,-1))
        })
    }
    return(
        <>
        <h1>{data.map((values,idx)=>(
            <p key={idx}>{values}</p>
        ))}</h1>
        <button onClick={add}>Add</button>
        <button onClick={deleteBtn}>Delete</button>
        </>
    )
}