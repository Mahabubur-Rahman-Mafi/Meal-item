import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const CategoryFood = ({ post }) => {
  const { strMealThumb, idMeal, strMeal } = post;
  return (
    <div>
      <Card className="border ">
        <Card.Img variant="top" src={strMealThumb} />
        <Card.Body>
          <Card.Title className="fs-2">{strMeal}</Card.Title>
      
          <Link to={`/category/${strMeal}/${idMeal}`}>
            <Button variant="primary" className="mt-2">View Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CategoryFood;
