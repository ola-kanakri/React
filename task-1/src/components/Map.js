import React from "react";
// function Map()
// {
//     return <h1>hello</h1>
// }
// export default Map;
export default function Map() {
    const employees = [
      {id: 4},
      {id: 3},
      {id: 2},
      {id: 1},
      {id: 5},
    ];
  
    return (
        
      <div>
        <h1>Mapping</h1>
        {[...employees]
        //   .sort((a, b) => a.id - b.id)
          .map(employee => {
            return (
              <div key={employee.id}>
                <h2>id: {employee.id}</h2>
  
                <hr />
              </div>
            );
          })}
      </div>
    );
  }