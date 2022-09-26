import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Title from '../../components/Title';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import FormDestino from '../../components/FormDestino';
// import { Container } from './styles';

function Edit() {
    const [destino, setDestino] = useState();
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
    }

    useEffect(() => {
        handleGetDestino()
    }, []);

  return  <>
    <Header />

    <section class="promo container-fluid">
        <div class="row">
            <div class="content col-sm-12 col-md-10 offset-md-1">
                <Title>Admin</Title>

                { destino && (
                    <FormDestino destino={destino} submit={handleSubmit} />
                )}
            </div>
        </div>
    </section>


    <Footer />
  </>;
}

export default Edit;