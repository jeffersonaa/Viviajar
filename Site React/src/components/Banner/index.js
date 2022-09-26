import React from 'react';
import SaoPaulo from '../../assets/images/Cidades/sao_paulo.jpg';
import RioDeJaneiro from '../../assets/images/Cidades/rio_de_janeiro.jpg';
import Pernanbuco from '../../assets/images/Cidades/pernanbuco.jpg';
import './style.css';

function Banner() {
  return <section className="banner">
  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={SaoPaulo} className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src={RioDeJaneiro} className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src={Pernanbuco} className="d-block w-100" alt="..." />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </button>
  </div>

</section>;
}

export default Banner;