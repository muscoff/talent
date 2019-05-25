import React from 'react';
import '../App.css';

export default function Top(props) {
  return (
    <div className={"top "+props.backgroundImage}>
      {props.children}
    </div>
  );
}
