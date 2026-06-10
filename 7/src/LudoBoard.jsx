import { useState } from "react"

export default function LudoBoard(){
    let[count ,setCount]= useState({blue:0, yellow:0, green:0, red:0});

    let setMovesForBlue = () => {
        setCount((currMove) => {
            return { ...currMove, blue: currMove.blue + 1 }
        })
    }

    let setMovesForGreen = () => {
        setCount((currMove) => {
            return { ...currMove, green: currMove.green + 1 }
        })
    }

    let setMovesForYellow = () => {
        setCount((currMove) => {
            return { ...currMove, yellow: currMove.yellow + 1 }
        })
    }

    let setMovesForRed = () => {
        setCount((currMove) => {
            return { ...currMove, red: currMove.red + 1 }
        })
    }
    return(
        <>
        <h1 style={{ color: "blue" }}>{count.blue}</h1>
        <button onClick={setMovesForBlue}>Inc Count</button>
        <br />

        <h1 style={{ color: "green" }}>{count.green}</h1>
        <button onClick={setMovesForGreen}>Inc Count</button>
        <br />

        <h1 style={{ color: "yellow" }}>{count.yellow}</h1>
        <button onClick={setMovesForYellow}>Inc Count</button>
        <br />

        <h1 style={{ color: "red" }}>{count.red}</h1>
        <button onClick={setMovesForRed}>Inc Count</button>
        <br />
        </>
    )
}