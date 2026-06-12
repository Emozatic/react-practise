import { useState } from "react";

export default function Forms(){
    let[data, setData]= useState("")
    let [value, setValue]= useState("");
    let [value2, setValue2]= useState("")
    
    let change=(e)=>{
        setValue(e.target.value)
        console.log(e.target.value)
    }
    let change2=(e)=>{
        setValue2(e.target.value)
        console.log(e.target.value)
    }
    let get=()=>{
        if(value=="" || value2==""){
            setData("plz complete the fields")
        }
        else if(value=="lk@123" && value2=="1234"){
            setData(`Welcome admin`)
        }
        else{
            setData("Invalid credentials");
        }
        setValue(value="")
        setValue2(value2="")
    }
    return(
       <>
       <input type="text" value={value} onChange={change}/>
       <input type="password" value={value2} onChange={change2}/>
       <h1>{data}</h1>
       <button onClick={get}>Get</button>

       </> 
    )
}