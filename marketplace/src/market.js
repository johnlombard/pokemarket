import React from 'react';
import Calculator from './calculator';
import Card from './card';

const Market = () => {

    let mockData = [4,2,7,5,10];
  return (
    <div className="Market">

    <Calculator prices={mockData}/>
    <Card/>
    <Card/>

    </div>
  );
}

export default Market;
