import React, { useState } from 'react';

// import { Container } from './styles';

function Form() {

    const [form, setForm] = useState({
        email: "",
        assunto: "",
        mensagem: "",
    });

  return <div className="col-md-6">
  <form>
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Endereço de email</label>
      <input
        type="email"
        className="form-control"
        aria-describedby="emailHelp"
        placeholder="Seu email"
        value={form.email}
        onChange={e => setForm({email: e.target.value})}
      />
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputPassword1">Assunto</label>
      <input
        type="text"
        className="form-control"
        placeholder="Digite o assunto"
        value={form.assunto}
        onChange={e => setForm({assunto: e.target.value})}
      />
    </div>
    <div className="form-group">
      <textarea 
      className="form-control" 
      value={form.mensagem}
      onChange={e => setForm({mensagem: e.target.value})}
      >
        Digite seu texto aqui
      </textarea>
    </div>
    <button type="submit" className="btn btn-primary">Enviar</button>
  </form>
</div>;
}

export default Form;