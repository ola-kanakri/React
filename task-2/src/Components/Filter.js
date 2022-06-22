import React from "react";
import { useState } from "react";

let names = ["Khozama","Mohammad","Lujain","Nada","Ayman"]
function Filter() {
  const [searchValue, setSearchValue] = useState("")

  return (
    <div className="Filter">
     <br/> <br/><h2>Search filtering</h2>

      <input
        type="text"
        name="search"
        value={searchValue}
        onChange={inp => setSearchValue(inp.target.value)}
      />


      <ul>
        {names
          .filter(name => name.match(new RegExp(searchValue, "i")))
          .map(name => {
            return <li key={name}>{name} </li>
          })}
      </ul>


    </div>
  )
}


  
export default Filter;