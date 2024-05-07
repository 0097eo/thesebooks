import React from 'react';
import {link} from 'react-router-dom';
const Navbar = () => {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/newbook">Add New Book</Link>
          </li>
        </ul>
      </nav>
    );
  };
export default Navbar;