import React from 'react';
import { Link } from 'react-router-dom';
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
      </div>
    );
};

export default Meals;