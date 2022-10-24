import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Title from '../../../components/Title';
import AdminMenu from "../../../components/AdminMenu";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

function List() {
    const [destinos, setDestinos] = useState([]);

    const handleGetDestinos = async () => {
        const result = await axios.get('http://localhost:8080/destinos');
        setDestinos(result.data);
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

        await axios.delete('http://localhost:8080/destinos', config);

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
                <Title>Destinos</Title>

                <Link className='btn btn-success mb-3' to='/admin/destinos/add'>Novo destino</Link>

                <table className='table'>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Cidade</th>
                        <th>Estado</th>
                        <th>Ações</th>
                    </tr>
                    </thead>

                    <tbody>

                    {destinos.map(destino => (
                        <tr key={destino.id}>
                            <td>{destino.id}</td>
                            <td>{destino.nome}</td>
                            <td>{destino.descricao}</td>
                            <td>{destino.cidade}</td>
                            <td>{destino.estado}</td>
                            <td>
                                <Link className='btn btn-warning' to={`/admin/destinos/edit/${destino.id}`}>Editar</Link>
                                <button onClick={e => handleDelete(e, destino.id)} className='btn btn-danger'>Excluir</button>
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