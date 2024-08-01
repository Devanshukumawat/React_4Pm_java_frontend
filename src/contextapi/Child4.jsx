import { data } from "../App";

function Child4() {

    return ( 
        <>
            <data.Consumer>
                {
                    (userNum)=>{
                        return(
                            <>
                            <h1>Child-4 🤗 -:Last:- {userNum} </h1>
                            </>
                        )
                    }
                }
            </data.Consumer>
            
        </>
     );
}

export default Child4;