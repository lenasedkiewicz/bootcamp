import { useState } from "react";
import productsData from "../../data/products";
import Product from "../Product/Product";
import PropTypes from 'prop-types';

const Products = () => {
  const [products] = useState(productsData);

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
