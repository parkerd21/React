import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import { useContext } from "react";
import CartContext from "../store/cart-context";

export default function Header() {
  const {items} = useContext(CartContext);
  const cartQuantity = items.length;

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="Food and beverage" />
        <h1>Order Up</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({cartQuantity})</Button>
      </nav>
    </header>
  );
}
