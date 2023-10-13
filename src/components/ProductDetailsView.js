import React, { useEffect } from "react";
import { getProductById } from "../products";
import {useParams,Link} from "react-router-dom";

const ProductDetailsView = () => {
  // Replace this static product id with a dynamic one retrieved from the router
  // See documentation on how to retrieve the id from the router
  // https://reactrouter.com/en/main/route/route#dynamic-segments
  
  const id = useParams().id;
  useEffect(() => {console.log(id)});

  // getProductById is a function to fetch product details from the products.js file.
  // In a real application, this would be an API call to the backend.
  const product = getProductById(id);

  return (
    <div>
      <h2>{product.name}</h2>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "20px" }}>
          <img src="http://via.placeholder.com/400x400" alt="Placeholder" />
        </div>
        <div>
          <h3>${product.price}</h3>
          <p>Description: {product.description}</p>
          <p>Category: {product.category}</p>
          <p>In Stock: {product.stock} pcs</p>
          <p>Rating: {product.rating} / 5.0</p>
          <div style={{ marginTop: "20px" }}>
            {/* No functionality is required for this button */}
            <button>Add to Cart</button>{" "}
          </div>
          <div style={{ marginTop: "20px" }}>
            {/* Replace anchor element with router Link */}
            <Link to="/">Back to Products</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsView;
