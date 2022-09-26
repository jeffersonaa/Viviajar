import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Title from '../../components/Title';
import axios from "axios";
import FormDestino from '../../components/FormDestino';

function Add() {

    const handleSubmit = async (e, data) => {
        e.preventDefault();
        const config = {
            headers: { 
                'Content-Type': 'application/json'
              },
        }
        
        await axios.post(`http://localhost:8080/destinos`, data, config)
    }

  return  <>
    <Header />

    <section class="promo container-fluid">
        <div class="row">
            <div class="content col-sm-12 col-md-10 offset-md-1">
                <Title>Admin</Title>
                <FormDestino submit={handleSubmit} />
            </div>
        </div>
    </section>

    <Footer />
  </>;
}

export default Add;