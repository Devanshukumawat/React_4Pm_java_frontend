import { useState } from "react";

function Counter() {

   const [value,setValue] = useState(0)

   function handleIncrement(){
    setValue(value+1)
   }

   function handledecrement(){
    if(value){
        setValue(value-1)
    }
   
   }
    return ( 
        <>
            <h1>Counter Application {value===10?"Yahhooo...🥳":""}</h1>
            <button onClick={handleIncrement} style={{display:value===10?"none":""}} >Increment</button>
            <h1>{value}</h1>
            <button onClick={handledecrement}>Decrement</button>
        </>
     );
}

export default Counter;