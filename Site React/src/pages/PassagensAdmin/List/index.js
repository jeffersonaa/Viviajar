import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Title from '../../../components/Title';
import AdminMenu from "../../../components/AdminMenu";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

function List() {
    const [passagens, setPassagens] = useState([]);

    const handleGetDestinos = async () => {
        const result = await axios.get('http://localhost:8080/passagens');
        setPassagens(result.data);
    }

    const handleDelete = async (e, id) => {
        e.preventDefault();

        const config = {
            data: JSON.stringify({
                id
            }),
            headers: { 
                'Content-Type': 'application/json'
              },
        }

        await axios.delete('http://localhost:8080/passagens', config);

        handleGetDestinos();

    }

    useEffect(() => {
        handleGetDestinos();
    }, [])


  return <>
    <Header />
    <section className="promo container-fluid">
    <AdminMenu />
        <div className="row">
            <div className="content col-sm-12 col-md-10 offset-md-1">
                <Title>Passagens</Title>

                <Link className='btn btn-success mb-3' to='/admin/passagens/add'>Nova Passagem</Link>

                <table className='table'>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Destino</th>
                        <th>Cliente</th>
                        <th>CPF</th>
                        <th>Telefone</th>
                        <th>Ações</th>
                    </tr>
                    </thead>

                    <tbody>

                    {passagens.map(passagem => (
                        <tr key={passagem.id}>
                            <td>{passagem.id}</td>
                            <td>{passagem.destino.nome}</td>
                            <td>{passagem.cliente.nome}</td>
                            <td>{passagem.cliente.cpf}</td>
                            <td>{passagem.cliente.telefone}</td>
                            <td>
                                <button onClick={e => handleDelete(e, passagem.id)} className='btn btn-danger'>Excluir</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                   
                </table>

            </div>
        </div>
    </section>


    <Footer />
  </>;
}

export default List;