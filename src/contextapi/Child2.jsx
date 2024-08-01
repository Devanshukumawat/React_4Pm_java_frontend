import { useContext } from "react";
import Child3 from "./Child3";
import { data } from "../App";

function Child2() {
   const userNum = useContext(data)
    return ( 
        <>
            <h1>Child-2 🫤 {userNum}</h1>
            <Child3/>
        </>
     );
}

export default Child2;