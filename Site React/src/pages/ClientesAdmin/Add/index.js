import React, { useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Title from '../../../components/Title';
import axios from "axios";
import FormCliente from '../../../components/FormCliente';
import AdminMenu from "../../../components/AdminMenu";
import Alert from '../../../components/Alert';

function Add() {
    const [showMessage, setShowMessage] = useState(false)

    const handleSubmit = async (e, data) => {
        e.preventDefault();
        const config = {
            headers: { 
                'Content-Type': 'application/json'
              },
        }
        
        await axios.post(`http://localhost:8080/clientes`, data, config)
        setShowMessage(true)
    }

  return  <>
    <Header />

    <section className="promo container-fluid">
        <AdminMenu />
        
        <div className="row">
            <div className="content col-sm-12 col-md-10 offset-md-1">
                <Title>Clientes</Title>
                { showMessage && <Alert text="Cadastro realizado com sucesso!!" /> }
                <FormCliente submit={handleSubmit} />
            </div>
        </div>
    </section>

    <Footer />
  </>;
}

export default Add;