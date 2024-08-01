import ChildB from "./ChildB";

function ChildA(props) {
    
  

    const {data} = props

    return ( 
        <>
            <h1>ChildA..🥳</h1>
            <ChildB data1={data}/>
        </>
     );
}

export default ChildA;