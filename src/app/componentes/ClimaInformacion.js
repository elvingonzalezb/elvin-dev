import React from 'react';
import bgCactus from '../imagen/rain-drops.jpg';
import '../index.css';

const ClimaInformacion = props => {
    const { 
        nomCiudadClima, 
        abrPaisClima, 
        temperatura, 
        desClima, 
        humedad, 
        temperaturaMinima,
        temperaturaMaxima,
        desError,
        desIconoClima
    } = props;

    console.log(props);
    return desError
        ? <div>          
            <div className="alert alert-danger">
                <p className="des-error">
                    {desError}
                </p>
            </div>
          </div>
        : <div className="caja-principal">  
            {
                temperatura 
                    ? <div className="caja-detalle">
                        <div className="caja-ciudad">
                            {nomCiudadClima}, {abrPaisClima}
                        </div>

                        <div className="caja-temperatura">
                            {temperatura}
                            <span className="tipo-escala">°C</span>
                        </div>

                        <div className="caja-des-clima">
                            {desClima}
                        </div>                     

                        <div className="container caja-velocidad m-2
                        ">
                            <div className="row text-center ml-1">
                                <div className="col-md-4 border-right border-left">
                                    <span className="tem-minima">MIN</span>
                                    <div className="text-center text-2rem">
                                        {temperaturaMinima}
                                    </div>
                                </div>
                                <div className="col-md-4 border-right border-left">
                                    <span className="tem-maxima">MAX</span>
                                    <div className="text-center text-2rem">
                                        {temperaturaMaxima}
                                    </div>
                                </div>
                                <div className="col-md-4 border-right border-left">
                                    <span className="humedad">HUMEDAD</span>
                                    <div className="text-center text-2rem">
                                        {humedad}
                                    </div>
                                </div>
                           </div>
                        </div>

                        <div className="caja-img">
                            <img src={desIconoClima} className="icono-clima" />
                        </div> 
                      </div>                 
                    :                    
                    <img src="https://cdn.pixabay.com/photo/2015/09/04/19/32/landscape-922581_960_720.png" className="bg-card-clima" />
             
            }                               
        </div>  
}

export default ClimaInformacion;