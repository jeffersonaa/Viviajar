import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Title from '../../../components/Title';
import AdminMenu from "../../../components/AdminMenu";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

function List() {
    const [clientes, setClientes] = useState([]);

    const handleGetDestinos = async () => {
        const result = await axios.get('http://localhost:8080/clientes');
        setClientes(result.data);
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

        await axios.delete('http://localhost:8080/clientes', config);

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
                <Title>Clientes</Title>

                <Link className='btn btn-success mb-3' to='/admin/clientes/add'>Novo Cliente</Link>

                <table className='table'>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>CPF</th>
                        <th>Telefone</th>
                        <th>Ações</th>
                    </tr>
                    </thead>

                    <tbody>

                    {clientes.map(cliente => (
                        <tr key={cliente.id}>
                            <td>{cliente.id}</td>
                            <td>{cliente.nome}</td>
                            <td>{cliente.email}</td>
                            <td>{cliente.cpf}</td>
                            <td>{cliente.telefone}</td>
                            <td>
                                <Link className='btn btn-warning' to={`/admin/clientes/edit/${cliente.id}`}>Editar</Link>
                                <button onClick={e => handleDelete(e, cliente.id)} className='btn btn-danger'>Excluir</button>
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