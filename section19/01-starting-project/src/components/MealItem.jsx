import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import { useContext } from "react";
import CartContext from "../store/cart-context";

export default function MealItem({ meal }) {
  const { id, name, price, description, image } = meal;

  const formattedPrice = currencyFormatter.format(price);

  const cartContext = useContext(CartContext)

  return (
    <li key={id} className="meal-item">
      <article>
        <img
          src={`http://localhost:3000/${image}`}
          className="meal-item img"
          alt={name}
        />
        <div>
          <h3>{name}</h3>
          <p className="meal-item-price">{formattedPrice}</p>
          <p className="meal-item-description">{description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={() => cartContext.addItem(meal)}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}
