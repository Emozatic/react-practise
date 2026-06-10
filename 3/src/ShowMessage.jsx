export default function ShowMessage({message,color}){
    let style= {color:color}
    return(
        <>
        <h1 style={style}>{message}</h1>
        </>
    )
}