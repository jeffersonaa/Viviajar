import React, {useState} from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Title from '../../../components/Title';
import axios from "axios";
import FormDestino from '../../../components/FormDestino';
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
        
        await axios.post(`http://localhost:8080/destinos`, data, config)
        setShowMessage(true)
    }

  return  <>
    <Header />
    <AdminMenu />

    <section className="promo container-fluid">
        <div className="row">
            <div className="content col-sm-12 col-md-10 offset-md-1">
                <Title>Destinos</Title>
                { showMessage && <Alert text="Cadastrado com sucesso!" /> }
                <FormDestino submit={handleSubmit} />
            </div>
        </div>
    </section>

    <Footer />
  </>;
}

export default Add;