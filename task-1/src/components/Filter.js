import React from "react";
const Filter = () => {
    const input= ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const isEven = (value) => value % 2 === 0;
    const isOdd = (value) => !isEven(value);

    return (
        <>
        <h1>Filtering</h1>
      <div>
      
         <div>Input: {input.join(", ")}</div>
        <div>Even: {input.filter(isEven).join(", ")}</div>
        <div>Odd: {input.filter(isOdd).join(", ")}</div>

      </div></>
    );
  };
  
  export default Filter;