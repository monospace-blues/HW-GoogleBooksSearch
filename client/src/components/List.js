import React from 'react';

export function List ({ children }) {
  return (
    <div>
      Hellow world from bottom child
      { children }
    </div>
  );
}

export function ListItem ({ children }) {
  return (
    <li>
      Hellow world from listItem child
      { children }
    </li>
  );
}

