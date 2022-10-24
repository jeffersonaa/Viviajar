import React from 'react';
import Logo from '../../assets/images/logo.png';
import { Link } from "react-router-dom";
import './style.css';

function Header() {
  return <header>
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
    <a className="navbar-brand" href="/"><img className="logomenu" src={Logo} alt="Logotipo" /> </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
        <Link className="nav-item nav-link" to="/promocoes">Promoções</Link>
        <Link className="nav-item nav-link" to="/destinos">Destinos</Link>
        <Link className="nav-item nav-link" to="/contato">Contato</Link>
        <Link className="nav-item nav-link" to="/admin">Admin</Link>
      </div>
    </div>
  </nav>
</header>;
}

export default Header;