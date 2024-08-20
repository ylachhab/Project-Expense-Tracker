import { useState } from "react";
// import "./App.css";
import Product from "./component/Product";
import ListProduct from "./component/ListProduct";
import Selected from "./component/Selected";

function App() {
  const [expenseProduct, setExpenseProduct] = useState([
    { id: 1, description: "hello", amount: 20, category: "Groceries" },
    { id: 2, description: "hell", amount: 20, category: "Groceries" },
    { id: 3, description: "hel", amount: 20, category: "Groceries" },
    { id: 4, description: "he", amount: 20, category: "Groceries" },
  ]);

  const [productFilter, setProductFilter] = useState("");

  const expenseFilter = productFilter
    ? expenseProduct.filter((expense) => expense.category === productFilter)
    : expenseProduct;

  return (
    <>
      <Product
        onSubmit={(data) =>
          setExpenseProduct([
            ...expenseProduct,
            { ...data, id: expenseProduct.length + 1 },
          ])
        }
      />
      <Selected onSelectedCategory={(data) => setProductFilter(data)} />
      <ListProduct
        expenses={expenseFilter}
        onDelete={(id) =>
          setExpenseProduct(expenseProduct.filter((e) => e.id !== id))
        }
      />
    </>
  );
}

export default App;
