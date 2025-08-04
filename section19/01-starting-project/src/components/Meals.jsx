import { useEffect, useState } from "react";

export function Meals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function getMeals() {
      const response = await fetch("http://localhost:3000/meals");
      const meals = await response.json();
      setMeals(meals);
    }

    getMeals();
  }, []);

  return (
    <>
      {meals && (
        <ul id="meals">
          {meals.map((meal) => {
            return (
              <li key={meal.id} className="meal-item">
                <div className="meal-item h3">{meal.name}</div>
                <div className="meal-item-price">{meal.price}</div>
                <div className="meal-item-description">{meal.description}</div>
                <img src={meal.image} className="meal-item img"></img>
              </li>
            );
          })}
        </ul>
      )}
      {!meals && (
        <div>loading</div>
      )}
    </>
  );
}
