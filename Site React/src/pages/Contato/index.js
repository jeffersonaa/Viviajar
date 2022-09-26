import React from 'react';
import Contacts from '../../components/Contacts';
import Footer from '../../components/Footer';
import Form from '../../components/Form';
import Header from '../../components/Header';
import Title from '../../components/Title';

// import { Container } from './styles';

function Contato() {
  return <>
  <Header />
  <section className="promo container-fluid">
      <div className="row">
        <div className="content col-sm-12 col-md-10 offset-md-1">
          <Title>Contato</Title>
          <div className="row mb-5">
            <Contacts />
            <Form />
            
          </div>
        </div>
      </div>
    </section>

  <Footer />
  </>;
}

export default Contato;