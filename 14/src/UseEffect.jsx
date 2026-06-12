import { useEffect,useState } from "react";

export default function UseEffect(){
    let[count, setCount]= useState(0);

    let counter=()=>{
        setCount (count+1)
    }
    useEffect(()=>{
        document.title=count
    },[count])
    return(
        <>
        <h1>{count}</h1>
        <button onClick={counter}>Add count</button>
        </>
    )
}