import classs from "./Cart.module.css";
import Model from "../UI/Model";
import { useContext } from "react";
import CartConext from "../../store/CartContext";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartCtx = useContext(CartConext);
  console.log("crtctx data", cartCtx);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    console.log("item.id", id);
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    console.log("item", item);
    cartCtx.addItem(item);
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
  return (
    <Model onclose={props.onHidecart}>
      {cartItems}
      <div className={classs.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classs.actions}>
        <button className={classs["button--alt"]} onClick={props.onHidecart}>
          Close
        </button>
        {hasItems && <button className={classs.button}>Order</button>}
      </div>
    </Model>
  );
};
export default Cart;
