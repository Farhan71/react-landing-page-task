import "./products.css";
import React from "react";
import ProductCard from "./ProductCard";
import { products } from "../../Assets/Data/data";
// Import your product data here

const Products = () => {
  return (
    <div className="top-deals-wrapper">
      <p className="primary-subheading">Top Deals</p>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
