import React, { Component } from 'react';

export default function Books(props) {
  return (
    <div>
      <h1>Books</h1>
      <ul>
        {props.books.map(
          ({title}) => <li>{title}</li>
        )}
      </ul>
    </div>
  );
}
