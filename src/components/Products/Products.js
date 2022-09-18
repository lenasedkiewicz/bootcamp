import { useState } from "react";
import productsData from "../../data/products";
import Product from "../Product/Product";

const Products = () => {
  const [products] = useState(productsData);
  const [currentColor, setCurrentColor] = useState(productsData.colors);
  const [currentPrice, setCurrentPrice] = useState(productsData.sizes);

  // useEffect(() => {
  //  // let products.color= productsData.colors[0]
  //  // setCurrentPrice=[productsData.basePrice + productsData.sizes.additionalPrice[0]]
  // }, currentColor, currentPrice);
 // const isActive = document
  return (
    <section>
      {products.map((products) => (
        <Product title={products.title} price={products.basePrice} key={products.name} id={products.id}
          {...products}
        />
      ))}
    </section>
  );
};

export default Products;
