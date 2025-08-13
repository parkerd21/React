import { useContext } from "react";
import { currencyFormatter } from "../util/formatting";
import CartContext from "../store/cart-context";
export default function CartItem({ item, key }) {

  const cartCtx = useContext(CartContext)

  function handleAddItem() {
    cartCtx.addItem(item);
  }

  function handleRemoveItem() {
    cartCtx.removeItem(item.id);
  }

  
  return (
    <li key={key} className="cart-item">
      <p>
        {item.name} - {item.quantity} x {currencyFormatter.format(item.price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={handleRemoveItem}>-</button>
        <span>{item.quantity}</span>
        <button onClick={handleAddItem}>+</button>
      </p>
    </li>
  );
}
