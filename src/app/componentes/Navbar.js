import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">API Plaza-Vea</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link className="nav-item nav-link" to="/productos">Productos</Link>
                <Link className="nav-item nav-link" to="/categoria">Categoria</Link>
                <Link className="nav-item nav-link" to="/sku">SKU</Link>
            </div>
        </div>
    </nav>
)