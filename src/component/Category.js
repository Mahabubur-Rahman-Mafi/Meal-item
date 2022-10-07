import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { strCategory, strCategoryThumb, strCategoryDescription } = category;

    const des = strCategoryDescription
    let des2 = des.split('', 200);
    return (
      <Card className="border ">
        <Card.Img variant="top" src={strCategoryThumb} />
        <Card.Body>
          <Card.Title className="fs-2">{strCategory}</Card.Title>
          <Card.Text>{des2}...</Card.Text>
          <Link to={`/category/${strCategory}`}>
            <Button variant="primary" className='w-100'>See Item</Button>
          </Link>
        </Card.Body>
      </Card>
    );
};

export default Category;