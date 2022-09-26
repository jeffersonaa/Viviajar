import React from 'react';
import './style.css';

function Title(props) {
  return  <h2 className="title text-left">{props.children}</h2>;
}

export default Title;