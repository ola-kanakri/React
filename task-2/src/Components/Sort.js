import React from "react";



export default function App() {

// const employees1=[4,3,1,2];
//     const numAscending =employees1.sort((a, b) => b- a);

const letters = ['Z','A','Q','B','C','Y','S','W'];
const sortedLetters =letters.sort();

  
    return (
      <div class="container">
         <br /><br />
        <h1>Sorting</h1>
        {/* <h2>{numAscending.map(data=> data).join(", ")}</h2> */}
        <h2>Origin Array: {letters.map(inp=> inp).join(", ")}</h2>
        <h2>Sorted Array: {sortedLetters.map(data=> data).join(", ")}</h2>
        <br /><br />
      </div>
    );
  }