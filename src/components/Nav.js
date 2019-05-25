import React from 'react';
import '../App.css';
import {NavLink} from 'react-router-dom';

export default function Nav() {
  return (
    <div>
      <div className="nav-link">
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="contact">Contact Us</NavLink></li>
              <li><NavLink to="talent">Talent</NavLink></li>
            </ul>
          </div>
    </div>
  );
}
