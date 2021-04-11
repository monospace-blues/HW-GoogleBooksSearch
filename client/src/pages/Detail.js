import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import API from '../utils/API';

/* Trying to figure out how the hell the proxy api is connected and sent to React app. I think its through saving things to this global state but I gotta figure it out later...

update:
got it to work, I didn't have axios on both react and the server package.json files
*/

function Detail(props) {
  const [book, setBook] = useState({});

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb63f0f1632jei38
  const { id } = useParams();
  useEffect (() => {
    API.getBook(id)
      .then(res => setBook(res.data))
      .catch(err => console.log(err));
  }, []);
  
  return (
    <div>
      <strong>
        {book.title} by {book.author}
      </strong>
      <p>
        {book.description}
      </p>
    </div>
  )
}

export default Detail;