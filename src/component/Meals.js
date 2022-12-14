import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Name from './Name';
import { useNavigate } from "react-router-dom";
import './Name.css'

const Meals = () => {

  const nevigate = useNavigate();
  const handleButton = (event) => {
    const text = event.target.innerText;
    const lowerText = text.toLowerCase()
    nevigate(`/meals/${lowerText}`);
  };
    return (
      <div className='meals-heading'>
        <Name handleButton={handleButton}></Name>
        <Outlet></Outlet>
      </div>
    );
};

export default Meals;