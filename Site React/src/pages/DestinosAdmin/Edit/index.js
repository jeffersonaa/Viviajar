import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Title from '../../../components/Title';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import FormDestino from '../../../components/FormDestino';
import AdminMenu from "../../../components/AdminMenu";
import Alert from '../../../components/Alert';

function Edit() {
    const [destino, setDestino] = useState();
    const [showMessage, setShowMessage] = useState(false)
    const { id } = useParams();

    const handleGetDestino = async () => {
        const result = await axios.get(`http://localhost:8080/destinos/${id}`);
        setDestino(result.data);
    }

    const handleSubmit = async (e, data) => {
        e.preventDefault();
        data.id = id;
        const config = {
            headers: { 
                'Content-Type': 'application/json'
              },
        }
        
        await axios.put(`http://localhost:8080/destinos`, data, config)
        setShowMessage(true)
    }

    useEffect(() => {
        handleGetDestino()
    });

  return  <>
    <Header />
    <AdminMenu />

    <section className="promo container-fluid">
        <div className="row">
            <div className="content col-sm-12 col-md-10 offset-md-1">
                <Title>Destinos</Title>
                { showMessage && <Alert text="Editado com sucesso!" /> }
                { destino && (
                    <FormDestino destino={destino} submit={handleSubmit} edit={true} />
                )}
            </div>
        </div>
    </section>


    <Footer />
  </>;
}

export default Edit;