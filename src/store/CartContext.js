import { createContext } from "react";
const CartConext = createContext({
  item: [],
  totalAmount: 0,
  additem: (item) => {},
  removeitem: (id) => {},
  resetstore: () => {},
});

export default CartConext;
