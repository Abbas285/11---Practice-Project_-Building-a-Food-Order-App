import classs from "./Cart.module.css";
import Model from "../UI/Model";
import { useContext, useState } from "react";
import CartConext from "../../store/CartContext";
import CartItem from "./CartItem";
import Checkpout from "./Checkout";
const Cart = (props) => {
  const [isCheckout, setIscheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didsubmit, setdidSubmit] = useState(false);
  const cartCtx = useContext(CartConext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://foodapp-6d29a-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setdidSubmit(true);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };
  const orderhandler = () => {
    setIscheckout(true);
  };

  const cartItems = (
    <ul className={classs["cart-items"]}>
      {cartCtx.items.length > 0 &&
        cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        ))}
    </ul>
  );
  const modelAction = (
    <div className={classs.actions}>
      <button className={classs["button--alt"]} onClick={props.onHidecart}>
        Close
      </button>
      {hasItems && (
        <button className={classs.button} onClick={orderhandler}>
          Order
        </button>
      )}
    </div>
  );
  const cartModelContent = (
    <>
      {cartItems}
      <div className={classs.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkpout
          onConfirm={submitOrderHandler}
          onCancel={() => setIscheckout(false)}
        />
      )}
      {!isCheckout && modelAction}
    </>
  );
  const isSubmittingModelContent = <p>Sending Order Data ...</p>;
  const didSubmitModalContent = (
    <>
      <p>Sucessfully Sent The Ordr!</p>
      <div className={classs.actions}>
        <button
          className={classs.button}
          onClick={() => {
            setdidSubmit(false);
            cartCtx.resetstore();
            props.onHidecart();
          }}
        >
          close
        </button>
      </div>
    </>
  );
  return (
    <Model onclose={props.onHidecart}>
      {!isSubmitting && !didsubmit && cartModelContent}
      {isSubmitting && isSubmittingModelContent}
      {didsubmit && !isSubmitting && didSubmitModalContent}
    </Model>
  );
};
export default Cart;
