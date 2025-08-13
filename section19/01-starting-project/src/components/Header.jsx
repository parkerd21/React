import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import { useContext, useState } from "react";
import CartContext from "../store/cart-context";
import UserProgressContext from "../store/UserProgressContext";

export default function Header() {
  const { items } = useContext(CartContext);
  const cartQuantity = items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  const userProgressCtx = useContext(UserProgressContext);

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="Food and beverage" />
        <h1>Order Up</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart ({cartQuantity})
        </Button>
      </nav>
    </header>
  );
}
