import { useState } from "react"

export default function Object(){
    let [intro,setIntro]= useState({name:"Lucky", age:21})

    let changeIntro= ()=>{
        setIntro({name:"Sah", age:20})
    }
    let birthday=()=>{
        setIntro({...intro, age:intro.age+1})
    }
    return (
        <>
        <h1>{intro.name}</h1>
        <h2>{intro.age}</h2>
        <button onClick={changeIntro}>Change</button>
        <button onClick={birthday}>Birthday</button>
        </>
    )
}