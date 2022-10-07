import React from 'react';
import { Button } from 'react-bootstrap'

const Name = ({ handleButton }) => {
  return (
    <div className="name-heading">
      <Button variant='info' className=' me-1' onClick={(event) => handleButton(event)}>A</Button>
      <Button variant='info' className=' me-1' onClick={(event) => handleButton(event)}>B</Button>
      <Button variant='info' className=' me-1' onClick={(event) => handleButton(event)}>C</Button>
      <Button variant='info' className=' me-1' onClick={(event) => handleButton(event)}>D</Button>
      <Button variant='info' className=' me-1' onClick={(event) => handleButton(event)}>E</Button>
      <Button variant='info' className=' me-1' onClick={(event) => handleButton(event)}>F</Button>
      <Button variant='info' className=' me-1' onClick={(event) => handleButton(event)}>G</Button>
      <Button variant='info' className=' me-1' onClick={(event) => handleButton(event)}>H</Button>
      <Button variant='info' className=' me-1' onClick={(event) => handleButton(event)}>I</Button>
      <Button variant='info' className=' me-1' onClick={(event) => handleButton(event)}>K</Button>
      <Button variant='info' className=' me-1' onClick={(event) => handleButton(event)}>L</Button>
      <Button variant='info' className=' me-1' onClick={(event) => handleButton(event)}>M</Button>
      <Button variant='info' className=' me-1' onClick={(event) => handleButton(event)}>N</Button>
      <Button variant='info' className=' me-1' onClick={(event) => handleButton(event)}>O</Button>
      <Button variant='info' className=' me-1' onClick={(event) => handleButton(event)}>P</Button>
      <Button variant='info' className=' me-1' onClick={(event) => handleButton(event)}>Q</Button>
      <Button variant='info' className=' me-1' onClick={(event) => handleButton(event)}>R</Button>
      <Button variant='info' className=' me-1' onClick={(event) => handleButton(event)}>T</Button>
      <Button variant='info' className=' me-1' onClick={(event) => handleButton(event)}>U</Button>
      <Button variant='info' className=' me-1' onClick={(event) => handleButton(event)}>V</Button>
      <Button variant='info' className=' me-1' onClick={(event) => handleButton(event)}>W</Button>
      <Button variant='info' className=' me-1' onClick={(event) => handleButton(event)}>X</Button>
      <Button variant='info' className=' me-1' onClick={(event) => handleButton(event)}>Y</Button>
      <Button variant='info' className=' me-1' onClick={(event) => handleButton(event)}>Z</Button>
    </div>
  );
};

export default Name;