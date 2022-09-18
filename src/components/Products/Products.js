import { useState } from "react";
import productsData from "../../data/products";
import Product from "../Product/Product";

const Products = () => {
  const [products] = useState(productsData);
  const [currentColor, setCurrentColor] = useState("white");
  const [currentPrice, setCurrentPrice] = useState("S");

  // useEffect(() => {
  //  // let products.color= productsData.colors[0]
  //  // setCurrentPrice=[productsData.basePrice + productsData.sizes.additionalPrice[0]]
  // }, currentColor, currentPrice);
 // const isActive = document
  return (
    <section>
      {products.map((products) => (
        <Product title={products.title} price={products.basePrice} key={products.name} id={products.id} color={products.colors}
          {...products}
        />
      ))}
    </section>
  );
};

export default Products;
