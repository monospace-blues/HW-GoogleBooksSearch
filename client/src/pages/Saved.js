import React, { useState, useEffect } from 'react';
import { List, ListItem} from '../components/List';
import API from '../utils/API';

import { Link } from "react-router-dom";

function Saved () {
  // setting components initial state
  const [books, setBooks] = useState([])
  // const []

  // Load all books (initalize)
  useEffect (() => {
    loadBooks()
  }, [])

  // Load all books and set to setBooks
  function loadBooks () {
    API.getBooks()
      .then(res => 
        setBooks(res.data))
      .catch(err => console.log(err))
  }

  return (
    <div>
      Saved bookmarks
      <List>
        Hello world from high child
        {books.map(book => (
          <ListItem key={book._id}>
          <Link to={`/books/${book._id}`}>
            <strong>
              {book.title} by {book.author}
            </strong>
          </Link>
          </ListItem>
        ))} 
          
          
      </List>
    </div>
  )
}

export default Saved;