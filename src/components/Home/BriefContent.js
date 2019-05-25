import React from 'react';
import '../../App.css';
import {NavLink} from 'react-router-dom';

export default function BriefContent() {
  return (
    <div>
      <p className="white-text font-30">The first global network of matchmakers serving talent</p>
            <p className="white-text font-50 margin-top-20"><span className="yellow-text">Hey Talent,</span> matchmaking for work</p>
            <div className="button">
              <NavLink to="/talent"><button className="button">Talents</button></NavLink>
              <NavLink to="/talent"><button className="button">Matchmakers</button></NavLink>
              <NavLink to="/talent"><button className="button">Companies</button></NavLink>
            </div>
    </div>
  )
}
