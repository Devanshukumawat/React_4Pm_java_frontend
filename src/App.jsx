// // import Card from "./Comp/Card"
// // import Product from "./Comp/Product"
// // import Test from "./Comp/Test"
// // import Example from "./Props/Example";

import { createContext, useState } from "react";
import Child1 from "./contextapi/Child1";
import ChildA from "./Propsdrill/ChildA";
import Data from "./useEffect/Data";
import About from "./Webpage/About";
import Contact from "./Webpage/Contact";
import Footer from "./Webpage/Footer";
import Homepage from "./Webpage/Homepage";
import Navbar from "./Webpage/Navbar";

// // import Counter from "./Comp/Counter";
// // import State from "./Comp/State";
// import Form from "./Form/Form";
// import Data from "./useEffect/Data";
// import Effect from "./useEffect/Effect";


// function App() {

//   // let firstName = "Devanshu 😍"

//   // let Card1 = "Devanshu"
//   // let Card2 = "Aman"
//   // let Card3 = "Manny"

//   // let myArray = [
//   //   "Car",
//   //   "Bike",
//   //   "Truck"
//   // ]

//   // let ProductData =[
//   //   {productName:"I-phone",productPrice:"$567"},
//   //   {productName:"Samsung",productPrice:"$987"},
//   //   {productName:"Nokia",productPrice:"$456"},
//   //   {productName:"I-phone",productPrice:"$567"},
//   //   {productName:"Samsung",productPrice:"$987"},
//   //   {productName:"Nokia",productPrice:"$456"}
//   // ]


//   return ( 
//     <>
//       {/* <Card/> */}
//       {/* <Card/>
//       <Card/> */}
//       {/* <Test/> */}
//       {/* <Example text={firstName}/> */}

//       {/* <Card title={Card1}/>
//       <Card title={Card2}/>
//       <Card title={Card3}/>

//       {
//         myArray.map((value,index)=>(
//           <ul>
//             <li>{value}</li>
//           </ul>
         
//         ))
//       } */}

//       {/* <Product data={ProductData}/> */}

//       {/* <State/> */}
//       {/* <Counter/> */}

//       {/* <Form/> */}

//       {/* <Effect/>
//        */}

//        {/* <Data/> */}

//     </>
//    );
// }

// export default App;

import {BrowserRouter,Routes,Route} from "react-router-dom"
import Ref from "./Ref/Ref";
import Reducer from "./UseReducer/Reducer";

const data = createContext()

function App() {

  let userData = "Hey Buddy...😕"
  let userNum = "Devanshu123@123💕"

  // create provider consumer
  // create provider useContext


  return ( 
    <>
     

      <BrowserRouter>
      <Navbar/>
      <data.Provider value={userNum}>  
        <Routes>
        
          <Route path="/" element={<Homepage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/data" element={<Data/>}/>
          <Route path="/propdrill" element={<ChildA data={userData}/>}/>
          <Route path="/contextapi" element={<Child1/>}/>
          <Route path="/ref" element={<Ref/>}/>
          <Route path="/reducer" element={<Reducer/>}/>
       
        </Routes>
        </data.Provider> 
        <Footer/>
      </BrowserRouter>



    </>
   );
}

export default App;
export {data}