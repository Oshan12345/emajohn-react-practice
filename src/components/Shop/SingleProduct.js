import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
//import "./Shop.css";
function SingleProduct(props) {
  // console.log(props);
  const {
    img,
    price,
    star,
    starCount,
    seller,
    stock,
    name,
    features,
  } = props.product;
  const { AddProduct } = props;
  return (
    <div className="product-div">
      <div className="product">
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <h4>product name : {name}</h4>
          <p>seller : {seller}</p>
          <div className="price-feature">
            <div className="price-div">
              <p>price : {price}</p>
              <p>stock : {stock}</p>
            </div>
            <div className="rating">
              <p>{star}</p>
              <p>rating : {starCount}</p>
              <h6>
                <ul className="feature_list">
                  {features.length ? <h1>Features :</h1> : ""}{" "}
                  {features.map((feature) => (
                    <li key={feature.description + feature.value}>
                      {feature.description} : {feature.value}
                    </li>
                  ))}
                </ul>
              </h6>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => AddProduct(props.product)}>
        {" "}
        <FontAwesomeIcon icon={faShoppingCart} className="mx-2" />
        Shop now
      </button>
    </div>
  );
}

export default SingleProduct;
