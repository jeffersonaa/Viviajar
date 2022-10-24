import React, {useState} from 'react';

function FormCliente({ submit, cliente, edit }) {

    const initialValues = {
        nome: "",
        email: "",
        endereco: "",
        cpf: "",
        telefone: "",
    }

    const [form, setForm] = useState(cliente || initialValues );

    const handleGetData = (e, name) => {
        setForm({...form, [name]: e.target.value})
    }

    const configForm = [
        {
            name: "nome",
            label: "Nome"
        },
        {
            name: "email",
            label: "E-mail"
        },
        {
            name: "endereco",
            label: "Endereço"
        },
        {
            name: "cpf",
            label: "CPF"
        },
        {
            name: "telefone",
            label: "Telefone"
        },
    ];

    const handleSubmit = e => {
        submit(e, form)

        if(!edit) setForm(initialValues)
    }

  return <form className='mb-5' onSubmit={e => handleSubmit(e) }>
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

export default FormCliente;