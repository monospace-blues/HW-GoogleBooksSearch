import React from 'react';
import List from '../components/List';
import API from '../utils/API';

import { Link } from "react-router-dom";

function Saved () {
  

  return (
    <div>
      Saved bookmarks
      <List>
        Hello world from high child
        {[].map(book => (
          <Link to={`/api/books/${book._id}`}>
            <strong>
              {book.title} by {book.author}
            </strong>
          </Link>
          
        ))}
      </List>
    </div>
  )
}

export default Saved;