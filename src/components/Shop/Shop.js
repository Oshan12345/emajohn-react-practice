import React, { useState } from "react";
import fakeData from "../../fakeData/index";
import "./Shop.css";
import ShoppingCart from "./ShoppingCart";
import SingleProduct from "./SingleProduct";

function Shop() {
  const allProducts = fakeData.slice(0, 10);
  const [products, setProducts] = useState(allProducts);
  const [cart, setCart] = useState([]);

  // const [items, setItems] = useState(0);
  // const [itemsCost, setItemsCost] = useState(0);
  // const [shippingCost, setShippingCost] = useState(0);
  // const [tax, setTax] = useState(0);
  // const [total, setTotal] = useState(0);

  // const handleAddProduct = (price) => {
  //   setItems(items + 1);
  //   var cost = itemsCost + price;
  //   var tx = cost * 0.1;
  //   var sub = cost + tax;
  //   setItemsCost(cost);
  //   setTax(tx);
  //   setTotal(sub);
  // };

  const handleAddProduct = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div>
      <div className="shop_page">
        <div className="product_container">
          {products.map((p) => {
            return (
              <SingleProduct
                key={p.key}
                product={p}
                AddProduct={handleAddProduct}
              />
            );
          })}
        </div>
        <div className="shopping_cart">
          {/* <ShoppingCart details={{ items, itemsCost, tax, total }} /> */}
          <ShoppingCart cart={cart} />
        </div>
      </div>
    </div>
  );
}

// const SingleProduct = (props) => {
//   console.log(props);
//   const {
//     img,
//     price,
//     star,
//     starCount,
//     seller,
//     stock,
//     name,
//     features,
//   } = props.product;
//   const { AddProduct } = props;
//   return (
//     <div className="product-div">
//       <div className="product">
//         <div>
//           <img src={img} alt="" />
//         </div>
//         <div>
//           <h4>product name : {name}</h4>
//           <p>seller : {seller}</p>
//           <div className="price-feature">
//             <div className="price-div">
//               <p>price : {price}</p>
//               <p>stock : {stock}</p>
//             </div>
//             <div className="rating">
//               <p>{star}</p>
//               <p>rating : {starCount}</p>
//               <h6>
//                 <ul className="feature_list">
//                   {features.length ? <h1>Features :</h1> : ""}{" "}
//                   {features.map((feature) => (
//                     <li key={feature.description + feature.value}>
//                       {feature.description} : {feature.value}
//                     </li>
//                   ))}
//                 </ul>
//               </h6>
//             </div>
//           </div>
//         </div>
//       </div>
//       <button onClick={() => AddProduct(price)}>
//         {" "}
//         <FontAwesomeIcon icon={faShoppingCart} className="mx-2" />
//         Shop now
//       </button>
//     </div>
//   );
// };

// const OrderSummery = (props) => {
//   const { items, itemsCost, tax, total } = props.details;
//   return (
//     <div>
//       <p>Your order summery : {items}</p>
//       <p> Items : {itemsCost}</p>
//       <p>Shipping:</p>
//       <p>Tax : {tax}</p>
//       <p>Total: {total} </p>
//     </div>
//   );
// };

export default Shop;
