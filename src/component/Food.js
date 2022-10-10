import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import './Food.css'
const Food = () => {
  
    const food = useLoaderData();
    const foodDetails = food.meals[0]
    console.log(foodDetails);
    const {
      strMealThumb,
      strArea,
      strMeal,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strInstructions,
    } = foodDetails;
     return (
       <div>
         <Row>
           <Col xs={12} md={6} lg={7}>
             <img src={strMealThumb} className="img-fuild item-image"></img>
           </Col>
           <Col xs={12} md={6} lg={5}>
             <h2>Name: {strMeal} </h2>
                     <h3>Area: {strArea} </h3>
                     <h3>Instructions</h3>
                     <p>{ strInstructions}</p>
             <h4>Ingredient</h4>
             <ul>
               <li>{strIngredient1}</li>
               <li>{strIngredient2}</li>
               <li>{strIngredient3}</li>
               <li>{ strIngredient4 }</li>
             </ul>
           </Col>
         </Row>
       </div>
     );
};

export default Food;