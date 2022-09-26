import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Card from '../../components/Card';
import Title from '../../components/Title';
import './style.css';

import SaoPaulo from '../../assets/images/Cidades/sao_paulo.jpg';
import RioDeJaneiro from '../../assets/images/Cidades/rio_de_janeiro.jpg';
import Fortaleza from '../../assets/images/Cidades/fortaleza.jpg';
import Amazonas from '../../assets/images/Cidades/amazonas.jpg';
import Goias from '../../assets/images/Cidades/goias.jpg';
import Maranhao from '../../assets/images/Cidades/maranhao.jpg';
import MatoGrosso from '../../assets/images/Cidades/mato_grosso.jpg';
import Pernanbuco from '../../assets/images/Cidades/pernanbuco.jpg';
import MinasGerais from '../../assets/images/Cidades/minas_gerais.jpg';


function Promocoes() {
  return <>
    <Header />
    <section className="promo container-fluid">
      <div className="row">
        <div className="content col-sm-12 col-md-10 offset-md-1">
          <Title>Promoções</Title>
          <div className="row mb-4">
            <div className="col-md-4">
             <Card
            image={SaoPaulo} 
            title="São Paulo"
            textButton="Comprar"
            price='R$ 299,00'
            oldPrice='R$ 499,00'
            text="São Paulo, centro financeiro do Brasil, está entre as cidades mais populosas do mundo." 
             />
            </div>
            <div className="col-md-4">
            <Card
            image={RioDeJaneiro} 
            title="Rio De Janeiro"
            textButton="Comprar"
            price='R$ 299,00'
            oldPrice='R$ 499,00'
            text="O Rio de Janeiro é um estado no sudeste do Brasil. A sua
            capital, com o mesmo nome, é conhecida pelas praias." 
            />
            </div>
            <div className="col-md-4">
            <Card
            image={Fortaleza} 
            title="Ceará"
            textButton="Comprar"
            price='R$ 299,00'
            oldPrice='R$ 499,00'
            text="O Ceará, um estado do nordeste brasileiro, tem um interior
            montanhoso e um litoral atlântico com impressionantes
            falésias vermelhas." 
            />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-4">
            <Card
            image={Amazonas} 
            title="Amazonas"
            textButton="Comprar"
            price='R$ 299,00'
            oldPrice='R$ 499,00'
            text="Amazonas é um enorme estado no noroeste do Brasil, coberto
            quase na sua totalidade pela floresta tropical da Amazónia." 
            />
            </div>
            <div className="col-md-4">
            <Card
            image={Goias} 
            title="Goiás"
            textButton="Comprar"
            price='R$ 299,00'
            oldPrice='R$ 499,00'
            text="Goiás, um estado no centro do Brasil, alberga a savana
            acidentada, cidades da era colonial e uma agricultura de
            grande escala."
            />
            </div>
            <div className="col-md-4">
            <Card
            image={Maranhao} 
            title="Maranhão"
            textButton="Comprar"
            price='R$ 299,00'
            oldPrice='R$ 499,00'
            text="Maranhão, estado no nordeste brasileiro, é formado em parte
            pela Floresta Amazônica e pelas praias ao longo do Oceano
            Atlântico."
            />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-4">
            <Card
            image={MatoGrosso} 
            title="Mato Grosso"
            textButton="Comprar"
            price='R$ 299,00'
            oldPrice='R$ 499,00'
            text="Mato Grosso, um grande estado no centro-oeste brasileiro, é
            coberto na maioria pela floresta tropical amazónica, as
            zonas húmidas e as planícies da savana."
            />
            </div>
            <div className="col-md-4">
            <Card
            image={Pernanbuco} 
            title="Pernanbuco"
            textButton="Comprar"
            price='R$ 299,00'
            oldPrice='R$ 499,00'
            text="Pernambuco é um estado no nordeste do Brasil, no Oceano
            Atlântico. A sua capital moderna, o Recife, inclui um porto,
            a cidade velha e a popular área balnear de Boa Viagem."
            />
            </div>
            <div className="col-md-4">
            <Card
            image={MinasGerais} 
            title="Minas Gerais"
            textButton="Comprar"
            price='R$ 299,00'
            oldPrice='R$ 499,00'
            text="Minas Gerais, um grande estado continental no sudeste do
            Brasil, é conhecido por cidades da era colonial que remetem
            à corrida do ouro no país no século 18."
            />
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </>;
}

export default Promocoes;