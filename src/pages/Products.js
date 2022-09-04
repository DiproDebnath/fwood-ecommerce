import "./Products.css";

import { useFetch } from "../hooks/useFetch";

const Products = () => {
  // api with objects
  const { data } = useFetch(
    "https://my-json-server.typicode.com/AhmedLabeeb110/fwood-ecommerce-db/allproducts "
  );

  return (
    <div className="product">
      {data &&
        data.map((allproduct) => (
          <div className="product-card" key={allproduct.id}>
            <span className="sellingStatus">{allproduct.sellingStatus}</span>
            <img src={allproduct.image} alt="images" />
            <div className="productTitle">{allproduct.name}</div>
            <div className="productPrice">{allproduct.price}</div>
            <p className="productDescription">{allproduct.description}</p>
            <p className="stock">{allproduct.stock}</p>
            <button id="seeDetails">See Details</button>
          </div>
        ))}
    </div>
  );
};

export default Products;
