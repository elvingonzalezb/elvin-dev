import React, { component, Component } from 'react';
import ClimaInformacion from './componentes/ClimaInformacion';
import ClimaFormBuscar from './componentes/ClimaFormBuscar';

import { DES_KEY_API } from './key';

class App extends Component {

    state = {
        temperatura: '',
        temperaturaMinima: '',
        temperaturaMaxima: '',
        desClima: '',
        humedad: '',       
        nomCiudadClima: '',
        abrPaisClima: '',
        desIconoClima: '',
        desError: null
    }

    obtenerClima = async evento => {
        evento.preventDefault();
        const { nomCiudad }    = evento.target.elements;
        const nomCiudadActual  = nomCiudad.value;
       
        if (nomCiudadActual) {
            const desUrlApi = `http://api.openweathermap.org/data/2.5/weather?q=
                               ${nomCiudadActual}&appid=${DES_KEY_API}&units=metric`;
                                    
            const respuestaApi     = await fetch(desUrlApi);
            const oPronosticoClima = await respuestaApi.json();

                if (oPronosticoClima.cod == 404) {
                    this.setState({ desError: '¡No existe la Ciudad ingresada!' })
                } else {
                    const desIcono = oPronosticoClima.weather[0].icon;
                    const desUrlIcono = `http://openweathermap.org/img/w/${desIcono}.png`;

                    this.setState({
                        temperatura: oPronosticoClima.main.temp,
                        desClima: oPronosticoClima.weather[0].description,
                        humedad: oPronosticoClima.main.humidity,
                        temperaturaMinima: oPronosticoClima.main.temp_min,
                        temperaturaMaxima: oPronosticoClima.main.temp_max,
                        nomCiudadClima: oPronosticoClima.name,
                        abrPaisClima: oPronosticoClima.sys.country,
                        desIconoClima: desUrlIcono,
                        desError: null
                    });
                }           
            
        } else {
            this.setState({desError: '¡Ingrese Ciudad a Consultar!'})
        }        
    }

    render() {
        return(
            <div className="container p-4">
                <div className="row">
                    <div className="col-md-4 mx-auto">
                        <ClimaFormBuscar 
                            obtenerClima={this.obtenerClima}/>                       
                        <ClimaInformacion {...this.state} />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;