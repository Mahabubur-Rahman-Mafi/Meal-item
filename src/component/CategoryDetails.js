import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryFood from './CategoryFood';


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