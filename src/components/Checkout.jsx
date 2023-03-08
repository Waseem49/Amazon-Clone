import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Header from "./Header";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";




const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();


  
  return (
    <>
      <Header />
      <div className="checkout">
        <div className="checkout_left">
          <img
            className="checkout_add"
            src="https://gos3.ibcdn.com/bann-1553077574.jpg"
            alt=""
          />
          <div>
            <h2 className="checkout_title">Your Shopping Basket</h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="checkout_right">
          <Subtotal />
        </div>
      </div>
    </>
  );
};

export default Checkout;
