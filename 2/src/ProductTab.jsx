import Products from "./Products";

export default function ProductTab(){
    let features1= ["hi-tech", "long-lasting battery", "gaming mode"];
    let features2= ["long life", "army-grade testing", "cost effective"];
    let features3= ["nice writing", "japanese-tech"];
    return(
        <>
        <Products name="Phone" price={10000} description={"Nice Phone"} features={features1}/>
        <Products name="Laptop" price={200000} description={"Nice Laptop"} features={features2}/>
         <Products name="Pen" price={10} description={"Nice Pen"} features={features3}/>
        </>
    )
}