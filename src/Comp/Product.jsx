function Product(props) {

    const {data} = props

    return ( 
        <>
            <h1>All Products</h1>

            {
                data.map((value,index)=>(
                    <div style={{border:"2px solid red"}}>
                        <h1>Title:- {value.productName}</h1>
                        <h2>Price:- {value.productPrice}</h2>
                    </div>
                ))
            }

        </>
     );
}

export default Product;