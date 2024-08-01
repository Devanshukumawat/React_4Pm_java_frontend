import { useRef } from "react";

function Ref() {
    const refHook = useRef("")
    const textHook = useRef("")
    const inputref = useRef("")

    console.log(inputref)


    // refHook.current.innerText = "Devanshu Sir"

    function handleColor(){
        refHook.current.style.color = "green"
    }

    function handleText(){
        textHook.current.style.color = "red"
        textHook.current.style.fontSize = "80px"
    }

    function handleStyle(){
        inputref.current.style.color = "blue"
        inputref.current.style.border = "2px solid red"
    }

    return ( 
        <>
            <h1 ref={refHook}>UseRef Hook 📍</h1>
            <button onClick={handleColor}>Color</button>

            <h2 ref={textHook}>Text Hello 🫤</h2>
            <button onClick={handleText}>Text</button>

            <br/><br/>


            <input type="text" ref={inputref} />
            <button onClick={handleStyle}>Change Style</button>

        </>
     );
}

export default Ref;