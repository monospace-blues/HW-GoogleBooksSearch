import React from 'react';

function List ({ children }) {
  return (
    <div>
      Hellow world from bottom child
      { children }
    </div>
  )
}

export default List;