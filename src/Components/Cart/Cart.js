import classs from "./Cart.module.css";
import Model from "../UI/Model";
const Cart = (props) => {
  const cartitem = (
    <ul className={classs["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Model onclose={props.onHidecart}>
      {cartitem}
      <div className={classs.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classs.actions}>
        <button className={classs["button--alt"]} onClick={props.onHidecart}>
          Close
        </button>
        <button className={classs.button}>Order</button>
      </div>
    </Model>
  );
};
export default Cart;
