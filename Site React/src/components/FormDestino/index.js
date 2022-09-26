import React, {useState} from 'react';


// import { Container } from './styles';

function FormDestino(props) {
    const [form, setForm] = useState(props.destino || {
        nome: "",
        descricao: "",
        cidade: "",
        estado: "",
    });

    const handleGetData = (e, name) => {
        setForm({...form, [name]: e.target.value})
    }

  return <form className='mb-5' onSubmit={e => props.submit(e, form)}>
    <div className="form-group">
        <label htmlFor="nome">Nome</label>
        <input 
        type="text" 
        className="form-control" 
        id="nome" 
        value={form.nome}
        onChange={e => handleGetData(e, "nome")}  />
    </div>
    <div className="form-group">
        <label htmlFor="descricao">Descrição</label>
        <input 
        type="text" 
        className="form-control" 
        id="descricao" 
        value={form.descricao}
        onChange={e => handleGetData(e, "descricao")} />
    </div>
    <div className="form-group">
        <label htmlFor="estado">Estado</label>
        <input 
        type="text" 
        className="form-control" 
        id="estado" 
        value={form.estado}
        onChange={e => handleGetData(e, "estado")}/>
    </div>
    <div className="form-group">
        <label htmlFor="cidade">Cidade</label>
        <input 
        type="text" 
        className="form-control" 
        id="cidade" 
        value={form.cidade}
        onChange={e => handleGetData(e, "cidade")}/>
    </div>
    <button type="submit" className="btn btn-primary">Salvar</button>
  </form>;
}

export default FormDestino;