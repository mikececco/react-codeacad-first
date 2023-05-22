import React from 'react';
import './SearchBar.css';


function SearchBar(){
  return (
    <div>
      <form>
        <input type="text" placeholder="Input" className="search"></input>
        <input type="text" placeholder="Location" className="search"></input>
        <input type="submit"></input>
      </form>
    </div>
  )
}

export default SearchBar
