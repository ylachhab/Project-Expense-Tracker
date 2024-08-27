import { useEffect, useState } from 'react'

const Product = ({category}: {category: string}) => {

  const [products, setProducts] = useState([""]);

  useEffect(() => {
    console.log("Fetching Products: ", category);
    setProducts(["Clothing", "HouseHold"])
  }, [category])

  return (
    <div>{products}</div>
  )
}

export default Product