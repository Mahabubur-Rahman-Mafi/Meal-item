import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from './Category';
import './Home.css'

const Home = () => {
  const categoriesInt = useLoaderData();
  const categories = categoriesInt.categories
    return (
      <div className="card-info mt-5">
        {categories.map((category) => (
          <Category key={category.idCategory} category={category}></Category>
        ))}
      </div>
    );
};

export default Home;