import React, {useState} from 'react';

function FormDestino({ clientes, destinos, submit, edit }) {

    const initialValues = {
        id_destino: "",
        id_cliente: "",
    }

    const [form, setForm] = useState(initialValues );

    const handleGetData = (e, name) => {
        setForm({...form, [name]: e.target.value})
    }

    const configForm = [
        {
            name: "id_cliente",
            label: "Cliente",
            data: clientes
        },
        {
            name: "id_destino",
            label: "Destino",
            data: destinos
        },
    ];

    const handleSubmit = e => {
        submit(e, form)

        if(!edit) setForm(initialValues)
    }

  return <form className='mb-5' onSubmit={e => handleSubmit(e)}>

    { configForm.map(({ name, label, data }) => (
        <div key={name} className="form-group">
            <label htmlFor={name}>{label}</label>
            <select 
            type="text" 
            className="form-control" 
            id={name} 
            value={form[name]}
            onChange={e => handleGetData(e, name)}>
                <option value="">Selecione</option>
                {data.map(({ nome, id }) => <option key={id} value={id}>{nome}</option>)}
            </select>
        </div>
    )) }
  
    <button type="submit" className="btn btn-primary">Salvar</button>
  </form>;
}

export default FormDestino;