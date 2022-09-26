import React from 'react';
import './style.css';

function Search() {
  return <section className="search">
  <div className="input-group mb-3">
    <input type="text" className="form-control" placeholder="Digite seu destino" aria-label="Recipient's username"
      aria-describedby="button-addon2" />
    <div className="input-group-append">
      <button className="btn btn-outline-secondary" type="button" id="button-addon2">Buscar</button>
    </div>
  </div>
</section>;
}

export default Search;