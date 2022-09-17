import { useState, useEffect } from "react";
import productsData from "../../data/products";
import Product from "../Product/Product";
import PropTypes from 'prop-types';

const Products = () => {
  const [products] = useState(productsData);
  const [currentColor, setCurrentColor] = useState(productsData.colors);
  const [currentPrice, setCurrentPrice] = useState(productsData.sizes);

  useEffect(() => {
   // let products.color= productsData.colors[0]
   // setCurrentPrice=[productsData.basePrice + productsData.sizes.additionalPrice[0]]
  }, currentColor, currentPrice);
  return (
    <section>
      {products.map((products) => (
        <Product title={products.title} price={products.basePrice}
          {...products}
        />
      ))}
    </section>
  );
};

Products.propTypes ={

}

export default Products;
