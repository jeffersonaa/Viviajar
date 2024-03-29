import React from 'react';
import { Link } from "react-router-dom";

function AdminMenu() {
  return <div className="container-fluid">
    <div className='row'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light col-sm-12 col-md-10 offset-md-1">
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link className='nav-link' to="/admin/destinos">Destinos</Link>
            </li>
            <li className="nav-item">
                <Link className='nav-link' to="/admin/passagens">Passagens</Link>
            </li>
            <li className="nav-item">
                <Link className='nav-link' to="/admin/clientes">Clientes</Link>
            </li>
            </ul>
        </div>
        </nav>
    </div>
  </div>
}

export default AdminMenu;