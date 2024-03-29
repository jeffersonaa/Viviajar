import React, {useState} from 'react';

function FormDestino({ destino, submit, edit }) {

    const initialValues = {
        nome: "",
        descricao: "",
        cidade: "",
        estado: "",
    }

    const [form, setForm] = useState(destino || initialValues );

    const handleGetData = (e, name) => {
        setForm({...form, [name]: e.target.value})
    }

    const configForm = [
        {
            name: "nome",
            label: "Nome"
        },
        {
            name: "descricao",
            label: "Descrição"
        },
        {
            name: "estado",
            label: "Estado"
        },
        {
            name: "cidade",
            label: "Cidade"
        },
    ];

    const handleSubmit = e => {
        submit(e, form)

        if(!edit) setForm(initialValues)
    }

  return <form className='mb-5' onSubmit={e => handleSubmit(e)}>

    { configForm.map(({ name, label }) => (
        <div key={name} className="form-group">
            <label htmlFor={name}>{label}</label>
            <input 
            type="text" 
            className="form-control" 
            id={name} 
            value={form[name]}
            onChange={e => handleGetData(e, name)}  />
        </div>
    )) }
  
    <button type="submit" className="btn btn-primary">Salvar</button>
  </form>;
}

export default FormDestino;