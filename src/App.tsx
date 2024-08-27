import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number,
  name: string,
}

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] =  useState("");

  useEffect(() => {
    axios.get<User[]>("https://jsonplaceholder.typicode.com/userssd")
    .then((res) => setUsers(res.data))
    .catch((err) => setError(err.message));
  }, [])

  return <>
    {error && <p className="text-danger">{error}</p>}
    <ul>
      {users.map((event) => <li key={event.id}>{event.name}</li>)}
    </ul>
  </>;

};

export default App;

// import {useEffect, useState } from "react";


// const App = () => {

//   // afterRender
//   const connect = () => console.log("connecting");
//   const desconnect = () => console.log("desconnecting");


//   const [count, setCount] = useState(0);

//   const handleClick = () =>{

//     setCount((prev) =>
//       prev + 1
//     );
//   }

//   useEffect(() => {

//     console.log("----------------------------------");
//     connect();

//     return () => desconnect( );
//   }, [count]);

//   return (
//     <div>
//       <button onClick={handleClick}>
//         click here
//       </button>
//       <p>
//         {count}
//       </p>
//     </div>
//   );
// };

// export default App;


// import { useState } from "react";
// import Product from "./Product";

// const App = () => {

//   const [category,setCategory] = useState("");
//   // afterRender
//   // useEffect(() => {
//   //   //Side effect
//   //   // if (ref.current) ref.current.focus();
//   // }, []);
//   return (
//     <div>
//       <select  className="form-select" onChange={(event) => setCategory(event.target.value)}>
//         <option value=""></option>
//         <option value="Clothing">Clothing</option>
//         <option value="Household">Household</option>
//       </select>
//       <Product category={category}/>
//     </div>
//   );
// };

// export default App;



// import React, { useEffect, useRef } from "react";

// const App = () => {
//   const ref = useRef<HTMLInputElement>(null);

//   // afterRender
//   useEffect(() => {
//     //Side effect
//     if (ref.current) ref.current.focus();
//   }, []);
//   return (
//     <div>
//       <input ref={ref} type="text" className="form-control" />
//     </div>
//   );
// };

// export default App;

// import { useState } from "react";
// // import "./App.css";
// import Product from "./component/Product";
// import ListProduct from "./component/ListProduct";
// import Selected from "./component/Selected";

// function App() {
//   const [expenseProduct, setExpenseProduct] = useState([
//     { id: 1, description: "hello", amount: 20, category: "Groceries" },
//     { id: 2, description: "hell", amount: 20, category: "Groceries" },
//     { id: 3, description: "hel", amount: 20, category: "Groceries" },
//     { id: 4, description: "he", amount: 20, category: "Groceries" },
//   ]);

//   const [productFilter, setProductFilter] = useState("");

//   const expenseFilter = productFilter
//     ? expenseProduct.filter((expense) => expense.category === productFilter)
//     : expenseProduct;

//   return (
//     <>
//       <Product
//         onSubmit={(data) =>
//           setExpenseProduct([
//             ...expenseProduct,
//             { ...data, id: expenseProduct.length + 1 },
//           ])
//         }
//       />
//       <Selected onSelectedCategory={(data) => setProductFilter(data)} />
//       <ListProduct
//         expenses={expenseFilter}
//         onDelete={(id) =>
//           setExpenseProduct(expenseProduct.filter((e) => e.id !== id))
//         }
//       />
//     </>
//   );
// }

// export default App;
