import React from 'react';
import './style.css';

function MiniBanner(props) {
  return  <section className="mini-banner" style={{backgroundImage: `url(${props.image})`}}>
  <h2>{props.title}</h2>
  <button className="btn btn-primary">Conheça</button>
</section>;
}

export default MiniBanner;