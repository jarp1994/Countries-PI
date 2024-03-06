import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <h1>Vacations on your favorite Country</h1>
        <NavLink to="/">
         <button >Landing</button>
        </NavLink>
        <NavLink to="/home">
         <button >Home</button>
        </NavLink>
        <NavLink to="/create">
         <button >Create</button>
        </NavLink>
        <SearchBar />
    </div>
  )
}

export default NavBar
