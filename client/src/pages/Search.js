import React, { useState, useEffect } from 'react';


function Search() {

  // useState
  const [searchBook, setSearchBook] = useState("");

  // handleEvent
  function handleChange(e) {
    e.preventDefault();
    setSearchBook(e.target.value);
    console.log(searchBook);
  }

  return (
    <div>
      <h5>Book Search</h5>
      <form>
        <label>
          Search bar...
          <input 
            type="text" 
            name="search"
            value={searchBook}
            onChange={handleChange}
          />
        </label>
      </form>
    </div>
  )
}

export default Search;