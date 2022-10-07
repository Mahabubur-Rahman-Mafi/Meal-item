import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryFood from './CategoryFood';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const CategoryDetails = () => {
    const posts = useLoaderData();
    
    return (
      <div className="card-info">
        {posts.meals.map((post) => (
          <CategoryFood key={post.idMeal} post={post}></CategoryFood>
        ))}
      </div>
    );
    
}
export default CategoryDetails;