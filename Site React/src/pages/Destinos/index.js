import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MiniBanner from '../../components/MiniBanner';
import Title from '../../components/Title';

import SaoPaulo from '../../assets/images/Cidades/sao_paulo.jpg';
import RioDeJaneiro from '../../assets/images/Cidades/rio_de_janeiro.jpg';
import Fortaleza from '../../assets/images/Cidades/fortaleza.jpg';
import Amazonas from '../../assets/images/Cidades/amazonas.jpg';

// import { Container } from './styles';

function Destinos() {
  return <>
    <Header />

    <section className="destino container-fluid">
      <div className="row">
        <div className="content col-sm-12 col-md-10 offset-md-1">
          <Title>Destinos</Title>
          <MiniBanner
            image={Fortaleza}
            title="Ceará"
          />
           <MiniBanner
            image={SaoPaulo}
            title="São Paulo"
          />
           <MiniBanner
            image={RioDeJaneiro}
            title="Rio de Janeiro"
          />
           <MiniBanner
            image={Amazonas}
            title="Amazonas"
          />
       
        </div>
      </div>
    </section>



    <Footer />
  </>;
}

export default Destinos;