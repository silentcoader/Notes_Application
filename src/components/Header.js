import React from 'react';

const Header = ({ onAdd }) => (
  <header className="header">
    <h1>My Notes</h1>
    <button onClick={onAdd}>Add New Note</button>
    <button onClick={onAdd}>Search</button>
  </header>
);

export default Header;
