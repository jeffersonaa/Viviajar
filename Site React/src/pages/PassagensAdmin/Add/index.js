import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Title from '../../../components/Title';
import axios from "axios";
import FormPassagem from '../../../components/FormPassagem';
import AdminMenu from "../../../components/AdminMenu";
import Alert from '../../../components/Alert';

function Add() {
    const [showMessage, setShowMessage] = useState(false)
    const [clientes, setClientes] = useState([])
    const [destinos, setDestinos] = useState([])

    const handleGetClientes = async () => {
        const config = {
            headers: { 
                'Content-Type': 'application/json'
              },
        }

        const data = await axios.get(`http://localhost:8080/clientes`, config)
        setClientes(data.data)
    }

    const handleGetDestinos = async () => {
        const config = {
            headers: { 
                'Content-Type': 'application/json'
              },
        }

        const data = await axios.get(`http://localhost:8080/destinos`, config)
        setDestinos(data.data)
    }

    const handleSubmit = async (e, data) => {
        e.preventDefault();
        const config = {
            headers: { 
                'Content-Type': 'application/json'
              },
        }

        const newData = {
            "destino": {
                "id": data.id_destino
            },
            "cliente": {
                "id": data.id_cliente
            }
        }
        
        await axios.post(`http://localhost:8080/passagens`, newData, config)
        setShowMessage(true)
    }

    useEffect(() => {
        handleGetClientes()
        handleGetDestinos()
    }, [])

  return  <>
    <Header />

    <section className="promo container-fluid">
        <AdminMenu />
        
        <div className="row">
            <div className="content col-sm-12 col-md-10 offset-md-1">
                <Title>Passagens</Title>
                { showMessage && <Alert text="Cadastro realizado com sucesso!!" /> }
                <FormPassagem submit={handleSubmit} clientes={clientes} destinos={destinos} />
            </div>
        </div>
    </section>

    <Footer />
  </>;
}

export default Add;