import React from 'react';
import { NavLink } from 'react-router-dom';
import "../css/Nav.css";

function Nav() {
  return(
    <ul className="nav">
      {/* <li>
        <NavLink exact activeClassName='active' to='/'>
          <button>Home</button>
        </NavLink>
      </li> */}
    </ul>
  )
}

export default Nav;
