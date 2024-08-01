import { useState } from "react";
import FormCss from "./form.module.css"

function Form() {

    const [userName,setUserName] = useState("")
    const [passeord,setPassword] = useState("")
    const [login,setLogin] = useState("")

    function handleSubmit(event){
        event.preventDefault()
        setLogin(userName)
        console.log({password:passeord,user:userName})
    }

    function handleUsername(e){
        setUserName(e.target.value)
    }

    function handlePassword(e){
        setPassword(e.target.value)
    }

    return ( 
        <>
            <div className={FormCss.main}>
            <h1>{login===""?"Form":"Hello "+login + " 👤"}</h1>
            <form className={FormCss.form} onSubmit={handleSubmit}>
                <label>UserName</label>
                <input type="text" className="form-control"
                    value={userName}
                    onChange={handleUsername}
                />
                <label>Password</label>
                <input type="text" className="form-control"
                    value={passeord}
                    onChange={handlePassword}
                />
                <button type="submit" className="form-control btn btn-success mt-4">Login</button>
            </form>
            </div>
            
        </>
     );
}

export default Form;