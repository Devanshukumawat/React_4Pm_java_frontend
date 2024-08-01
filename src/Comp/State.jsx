import {useState} from "react"

function State() {

    // let username = "Devanshu"

    // function handleUpdate(){
    //     console.log("Update Name")
    //     username = "Manny"
    // }

    const [userName,setUserName] = useState("Devanshu")

    let data = [
        "manny","kizie"
    ]

    const [value,setValue] = useState(data)

    function handleUpdate(){
        setUserName("Manny")
    }

    function handelCheck(){
        setValue(["kizie","manny"])
    }

    return ( 
        <>
            {/* <h1>{username}</h1>
            <button onClick={handleUpdate}>Update</button> */}

            <h1>{userName}</h1>
            <button onClick={handleUpdate}>Update</button>

            {
                value.map((value)=>(
                    <ul>
                        <li>{value}</li>
                    </ul>
                ))
            }

            <button onClick={handelCheck}>Change Value</button>

            

        </>
     );
}

export default State;