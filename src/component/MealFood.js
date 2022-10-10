import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";


const MealFood = ({ food }) => {
  const { strMeal, strCategory, idMeal, strMealThumb } = food;
  return (
    <div>
      <div></div>
      <div>
        <Card className="border mt-4">
          <Card.Img variant="top" src={strMealThumb} />
          <Card.Body>
            <Card.Title className="fs-2">
              <h2>{strMeal}</h2>
              <h3>Category: {strCategory}</h3>
            </Card.Title>
            <Link to={`link/${strMeal}/${idMeal}`}>
              <Button variant="primary" className="mt-2">
                View Details
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default MealFood;
