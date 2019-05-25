import React from 'react';
import {NavLink} from 'react-router-dom';

export default function BriefContent() {
  return (
    <div>
      <p className="white-text font-20">The first global network of matchmakers serving talent</p>
            <p className="white-text font-50 margin-top-20"><span className="yellow-text">Hey Talent,</span> matchmaking for work</p>
            <div className="button justify-content-start">
              <NavLink to="/talent"><button className="button margin-right-20">Team Work</button></NavLink>
              <NavLink to="/talent"><button className="button">Equal Success</button></NavLink>
            </div>
    </div>
  )
}
