import React from "react";
import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";
import './Meals.css'

const Meals = () => {
  const meals = useLoaderData();
  console.log(meals);
  return (
    <div className="card-container">
      {meals.meals.map((meal) => (
        <Meal key={meal.idMeal} meal={meal}></Meal>
      ))}
    </div>
  );
};

export default Meals;
