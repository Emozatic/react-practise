import "./Products.css"
export default function Products(props){
    let isDiscount= props.price>10000 ? "50% off" : null
    let styles= {backgroundColor:"yellow"}
    return(
        <div className= "container">
        <p>{props.name}</p>
        <p>{props.description}</p>
        <h1 style={styles}>{isDiscount}</h1>
        <p>{props.features.join(", ")}</p>
        </div>
    )
}