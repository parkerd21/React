import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";

export default function MealItem({ meal }) {
  const { id, name, price, description, image } = meal;

  const formattedPrice = currencyFormatter.format(price);

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
          <Button>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}
