import { useReducer } from "react";

function Reducer() {


    let initialState = {
        count:0,
        value:"Hello Everyone:- ☁️"
    }

    const [state,dispatch] = useReducer(reducer,initialState)

    function reducer(currentState,actions){
        switch(actions){
            case "Increment":
               return  {...currentState,count:currentState.count+1}

            case "Decrement":
                return {...currentState,count:currentState.count-1}  
             
            case "Update":
                return {...currentState,value:currentState.value = "Hy Byby 🙋‍♂️"}    

            default:
                return {...currentState,count:currentState.count}    
        }
    }


    return ( 
        <>
            <h1>Learn Reducer Hook ...😍  {state.count>0 ? state.count:0}</h1>
            <button onClick={()=>{dispatch("Increment")}} >➕ Increment</button>
            <button onClick={()=>{dispatch("Decrement")}} >➖ Decrement</button>

            <h2>{state.value}</h2>
            <button onClick={()=>{dispatch("Update")}}>Update 👆</button>
        </>
     );
}

export default Reducer;