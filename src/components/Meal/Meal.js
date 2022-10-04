import React from "react";
import './Meal.css'

const Meal = ({ meal }) => {
  console.log(meal);
  const {strMeal,strMealThumb,strArea,strCategory}=meal
  return (
    <div  className="card">
        <div className="m-3">
            <img className="w-full rounded " src={strMealThumb} alt="" srcset="" />
            <div >
                <h3 className="mealtitle">{strMeal}</h3>
                <p className="mealtext"> Area : {strArea}</p>
                <p className="mealtext">Category : {strCategory}</p>
            </div>
            <div className="">
                <button className="btn">meal details</button>
                <button className="btn">order now</button>
            </div>
        </div>
    </div>
  );
};

export default Meal;
