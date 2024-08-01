import { useEffect, useState } from "react";

function Effect() {

    // useEffect(()=>{},[])

    const [age,setAge] = useState(20)
    const [value,setValue] = useState(600)

    
    function handleAge(){
        setAge(age+1)
    }

    function handleValue(){
        setValue(value-1)
    }


    useEffect(()=>{
        console.log("UseEffect Function...📍")
    },[age])
    
    return ( 
        <>
            <h1>UseEffect Hook...👤</h1>
            {/* Side effects */}

            <h1>Age:- {age}</h1>
            <button onClick={handleAge}>Age+</button>

            <h2>Value:- {value}</h2>
            <button onClick={handleValue}>Value-</button>

        </>
     );
}

export default Effect;