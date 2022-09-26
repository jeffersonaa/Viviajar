import React from 'react';
import './style.css';

import Email from '../../assets/images/email.png';
import Whatsapp from '../../assets/images/whatsapp.png';
import Telefone from '../../assets/images/telefone.png';
import Instagram from '../../assets/images/instagram.png';

function Contacts() {
  return <div className="contatos col-md-6">
  <p>
    <strong><img src={Email} alt="Email" /> Email: </strong> 
    contato@viviajar.com.br
  </p>
  <p>
    <strong><img src={Whatsapp} alt="Whatsapp" />Whatsapp:</strong>
    11 999999-9999
  </p>
  <p>
    <strong><img src={Telefone} alt="Telefone" />Telefone:</strong>
    11 2222-2222
  </p>
  <p>
    <strong><img src={Instagram} alt="Instagram" />Instagram:</strong>
    @Viviajar
  </p>
</div>;
}

export default Contacts;