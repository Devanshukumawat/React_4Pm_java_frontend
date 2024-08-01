import { useEffect, useState } from "react";

function Data() {
  const [value, setValue] = useState(1);
  const [age, setAge] = useState(50);
  const [productData, setProductData] = useState([]);
  const [title,setTitle]  = useState("")

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setProductData(result.products);
      });
  }, []);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${value}`)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log(result)
       setTitle(result.title)
      });
  }, [value]);
  

  function handleInc() {
    setValue(value + 1);
  }

  function handleAge() {
    setAge(age - 1);
  }

  return (
    <>
      <h1>Dummy Data...🥳</h1>

      <h1>Id :- {value} Title:- {title}</h1>
      <button onClick={handleInc}>➕</button>
      <h2>Age:- {age}</h2>
      <button onClick={handleAge}>🥳</button>

      <div className="container">
        <div className="row">
        
{
    productData.map((value,index)=>(
        <div className="col-md-4 mt-5 mb-5">
            <div className="card">
              <img src={value.images[0]} class="card-img-top" alt="..." style={{width:"200px",backgroundSize:"contain"}} />
              <div className="card-body">
                <p className="card-text">
                  {value.description}
                </p>
              </div>
            </div>
          </div>
    ))
}
          
        </div>
      </div>
    </>
  );
}

export default Data;
