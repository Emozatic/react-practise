export default function Event(){

    function doSomething(){
        alert("hello");
    }

    function doSomething2(){
        alert("hovered");
    }

    function event(e){
        
        console.log(e.target)
    }
    return(
        <>
        <button onClick={event,doSomething}>Click me</button>
        {/* <button onMouseOver={doSomething2}>Click me</button> */}
        </>
    )
}