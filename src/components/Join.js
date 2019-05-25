import React from 'react';
import '../App.css';

export default function Join(props) {
  return (
    <div className={"top "+props.backgroundImage}>
      <div className="width-60 height-100vh margin-auto">
            <div className="full flex-column">
              {props.children}
            </div>
      </div>
    </div>
  )
}
