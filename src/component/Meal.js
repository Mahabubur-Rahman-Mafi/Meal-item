import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MealFood from './MealFood'
import Name from "./Name";

const Meal = () => {
    const foods = useLoaderData();
    // const 
    return (
      <div className="card-info">
        {foods.meals.map((food) => (
          <MealFood key={food.idMeal} food={food}></MealFood>
        ))}
      </div>
    );
};

export default Meal;