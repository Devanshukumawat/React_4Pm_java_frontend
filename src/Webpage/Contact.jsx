import { useContext } from "react";
import { data } from "../App";

function Contact() {
    const userNum = useContext(data)
    return ( 
        <>
            <h1>Contact...🙂 {userNum}</h1>
        </>
     );
}

export default Contact;