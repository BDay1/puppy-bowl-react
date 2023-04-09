import React, { useState } from 'react';
import Players from './Players';


const SearchPlayer = (players, value) => {
    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = (event) => {
        e.preventDefault();
        setSearchTerm(event.target.value);
      };
      
      if (searchTerm.length > 0) {
        const filteredPups = players.filter(data => data.players.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return setSearchTerms(filteredPups);
      }
    return(
    <div id='search-bar'>
    <form>
      <label type='text'>Search Term:</label>
      <input type='text' search='search term' />
      <button  onClick={handleChange} type='search' value={searchTerm}>Search</button>
    </form>
    </div> 
   
    )
  }

export default SearchPlayer;
