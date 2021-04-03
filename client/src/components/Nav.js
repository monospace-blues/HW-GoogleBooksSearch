import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {

  return (
    <div>
      navigation {"\n"}

      <Link to='/'>Search</Link> {"\n"}
      <Link to='/saved'>Saved</Link>
    </div>
  )
}

export default Navigation;