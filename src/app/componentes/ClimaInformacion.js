import React from 'react';

const ClimaInformacion = props => {
    console.log(props);
    return props.desError
        ? <div>          
            <div className="alert alert-danger">
                <p>
                    {props.desError}
                </p>
            </div>
          </div>
        :<div>  
            {
                props.temperatura 
                ? <div className="card card-body">
                    <p>
                        Pais: {props.nomCiudadClima}, {props.abrPaisClima}
                    </p>
                    <p>
                        Temperatura: {props.temperatura} <span>°C</span>, {props.desClima}
                    </p>
                    <p>
                        Humedad: {props.humedad}
                    </p>
                    <p>
                        Velocidad: {props.velocidadViento}
                    </p>
                  </div>    
                : <div className="card card-body">
                    <p>Seleccione la ciudad</p>
                  </div> 
            }                               
        </div>  
}

export default ClimaInformacion;