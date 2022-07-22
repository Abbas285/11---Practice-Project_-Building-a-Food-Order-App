import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meal";
import Cart from "./Components/Cart/Cart";
import React, { useState } from "react";
function App() {
  const [cartisShown, setCartisShown] = useState(false);
  const ShownCartHandler = () => {
    setCartisShown(true);
  };
  const HidecartHandler = () => {
    setCartisShown(false);
  };
  return (
    <>
      {cartisShown && <Cart onHidecart={HidecartHandler} />}

      <Header onShowCart={ShownCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
