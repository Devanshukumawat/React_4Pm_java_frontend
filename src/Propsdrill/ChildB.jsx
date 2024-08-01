import ChildC from "./ChildC";

function ChildB(props) {
    const {data1} = props
    return ( 
        <>
            <h1>ChildB..➕</h1>
            <ChildC data2={data1}/>
        </>
     );
}

export default ChildB;