import React from "react";

function ShoppingCart({ cart }) {
  //console.log(cart);
  //const { items, itemsCost, tax, total } = props.details;
  //const total = cart.reduce((total, product) => total + product.price, 0);
  const totalCost = cart.reduce((total, product) => total + product.price, 0);
  // console.log(totalCost);
  let shippingCost = 12.99;
  if (totalCost === 0) {
    shippingCost = 0;
  }
  if (totalCost > 15 && totalCost < 30) {
    shippingCost = 4.99;
  } else if (totalCost >= 30) {
    shippingCost = 0;
  }

  let tax = (totalCost * 0.1).toFixed(2);
  const grandTotal = totalCost + shippingCost + Number(tax);
  const formatNumber = (num) => {
    const pricision = num.toFixed(2);
    return Number(pricision);
  };

  return (
    <div>
      <p>Your order summery </p>
      <p> Items : {cart.length}</p>
      <p>Products price : {formatNumber(totalCost)}</p>
      <p>Shipping:{shippingCost}</p>
      <p>Tax : {tax} </p>
      <p>Total: {grandTotal.toFixed(2)} </p>
    </div>
  );
}

export default ShoppingCart;
