import "./Products.css"
export default function Products(props){
    return(
        <div className= "container">
        <p>{props.name}</p>
        <p>{props.description}</p>
        <p>{props.price}</p>
        <p>{props.features.join(", ")}</p>
        </div>
    )
}