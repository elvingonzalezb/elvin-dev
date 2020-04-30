import React from 'react';

const ClimaFormBuscar = props => (
    <div className="card card-body bg-card">
        <form onSubmit={props.obtenerClima}>     
            <div className="form-group">
                <input type="text" 
                       name="nomCiudad" 
                       placeholder="Ingrese la ciudad" 
                       className="form-control" 
                       autoFocus />
            </div> 
            <button className="btn btn-success btn-block">
                Buscar
            </button>
        </form>
    </div>
);

export default ClimaFormBuscar;
