import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';

import Search from '../../components/Search';
import Card from '../../components/Card';
import MiniBanner from '../../components/MiniBanner';
import Title from '../../components/Title';

import Hoteis from '../../assets/images/hoteis.jpg';
import Aviao from '../../assets/images/aviao.jpg';
import Pacotes from '../../assets/images/pacotes.jpg';
import Cruzeiros from '../../assets/images/cruzeiros4.jpg';

import './style.css';

function Home() {

  return <>
    <Header />
    <Banner />
    <section className="container-fluid main">
    <div className="row">
      <div className=" content col-sm-12 col-md-10 offset-md-1">
       <Search />
        <Title>Promoções</Title>
        <div className="row">
          <div className="col-md-4">
            <Card 
            image={Hoteis} 
            title="Hoteis"
            textButton="Ver Opções"
            text="Hotel é um estabelecimento comercial especializado em proporcionar acomodações para
                  viajantes. Esse meio de hospedagem, geralmente, é classificado de uma a cinco estrelas." 
            />
          </div>

          <div className="col-md-4">
            <Card 
            image={Aviao} 
            title="Passagem aérea"
            textButton="Ver Opções"
            text="Passagem aérea é o método de ingresso para as viagens de avião. As companhias
                  aéreas vendem a passagem para o comprador, que apresenta-a no setor de embarque." 
            />
          </div>
          <div className="col-md-4">
            <Card 
            image={Pacotes} 
            title="Pacotes de viagem"
            textButton="Ver Opções"
            text="Compre com tranquilidade. Se os seus planos mudarem, você poderá alterar sua
                  viagem." 
            />
            </div>
          </div>
        <MiniBanner
            image={Cruzeiros}
            title='Cruzeiros'
        />
      </div>
        
    </div>

  </section>
    <Footer />
  </>;
}

export default Home;