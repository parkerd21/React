import { useEffect, useState } from "react";
import MealItem from "./MealItem";

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
                <MealItem 
                  key={meal.id}
                  meal={meal}
                />
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
