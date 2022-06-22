import React from "react";



export default function App() {

const employees1=[4,3,1,2];
    const numAscending =employees1.sort((a, b) => b- a);

const letters = ['Z','A','Q','B','C','Y','S','W'];
const sortedLetters =letters.sort();

  
    return (
      <div class="container">
        <h1>Sorting</h1>
        {/* <h2>{numAscending.map(data=> data).join(", ")}</h2> */}

        <h2>{sortedLetters.map(data=> data).join(", ")}</h2>
      </div>
    );
  }