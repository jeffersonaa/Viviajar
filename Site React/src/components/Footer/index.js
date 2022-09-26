import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../../assets/images/logo.png'
import Instagram from '../../assets/images/instagram.png'
import Youtube from '../../assets/images/youtube.png'
import Facebook from '../../assets/images/facebook.png'
import './style.css';

function Footer() {
  return <footer className="container-fluid">
  <div className="row">
    <div className="col-md-10 offset-md-1">
      <div className="row">
        <div className="col-md-4">
          <img className="logofooter" src={Logo} alt='Logotipo do footer' />
        </div>
        <div className="col-md-4">
          <h4>Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/destinos">Destinos</Link></li>
            <li><Link to="/promocoes">Promoções</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </div>
        <div className="col-md-4">
          <h4>Rede Sociais</h4>
          <ul className="redesociais">
            <li><a href="https://www.instagram.com" target="_blank" rel='noreferrer'> <img src={Instagram} alt='Ir para o Instagram' />Instagram</a>
            </li>
            <li><a href="https://www.facebook.com" target="_blank" rel='noreferrer'> <img src={Facebook} alt='Ir para o Facebook' />Facebook</a>
            </li>
            <li><a href="https://www.youtube.com" target="_blank" rel='noreferrer'> <img src={Youtube} alt='Ir para o Youtube' />YouTube</a></li>
          </ul>

        </div>
      </div>
    </div>

  </div>
  <div className="row">
    <div className="copy col-md-12">
      &#169;todos os direitos reservados a viviajar
    </div>
  </div>
</footer>;
}

export default Footer;