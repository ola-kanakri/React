import React from "react";

export default function Map() {
    // const employees = [
    //   {id: 4},
    //   {id: 3},
    //   {id: 2},
    //   {id: 1},
    //   {id: 5},
    // ];

    const Fruits = [
      {id: 1 , name: "Apple",  color: "Yellow"},
      {id: 2 , name: "Strawberry", color: "Red"},
      {id: 3 , name: "Kiwi", color: "Green"}
    ]; 
    
    return (
                
        <>

        <h1>Mapping</h1>
          <table class="table">

            <thead>
              <th scope="col">ID</th >
              <th scope="col">Name</th >
              <th scope="col">Color</th >
            </thead>

            <tbody>
              {Fruits.map((fruit)=>(

                <tr>  
                
                <th scope="row">{fruit.id}</th>
                <td>{fruit.name}</td>
                <td>{fruit.color}</td>
                
                </tr>

              ))}

            </tbody>
          
          </table>

        </>
    );
  }

