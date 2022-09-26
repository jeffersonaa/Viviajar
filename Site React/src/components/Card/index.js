import React from 'react';

function Card(props) {
  return <div className="card text-left">
  <div className="img-card">
    <img src={props.image} className="card-img-top" alt={props.title} />
  </div>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.text}</p>
    { props.price && props.oldPrice && (<>
        <span className="tachado">{props.oldPrice}</span><br />
        <span className="enfoque">{props.price}</span><br />
    </>) }
    <a href="#" className="btn btn-primary">{props.textButton}</a>
  </div>
</div>;
}

export default Card;