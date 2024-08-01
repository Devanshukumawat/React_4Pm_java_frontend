import "./test.css"

function Test() {

    const heading3 = {
        textAlign:"center",
        color:"blue"
    }

    return ( 
        <>
            <h1 className="text">Test Comp...</h1>
            <h2 style={{
                textAlign:"center",
                color:"brown"
            }} >Inline css in react</h2>

            <h3 style={heading3} >Js Varible Css</h3>
            <p className="hello">Hello class ...😍😍</p>

        </>
     );
}

export default Test;

