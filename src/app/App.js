import React, { component, Component } from 'react';
import ClimaInformacion from './componentes/ClimaInformacion';
import ClimaFormBuscar from './componentes/ClimaFormBuscar';

import { DES_KEY_API } from './key';

class App extends Component {

    state = {
        temperatura: '',
        desClima: '',
        humedad: '',
        velocidadViento: '',
        nomCiudadClima: '',
        abrPaisClima: '',
        desError: null
    }

    obtenerClima = async evento => {
        evento.preventDefault();
        const { nomCiudad, nomPais } = evento.target.elements;
        const nomCiudadActual        = nomCiudad.value;
        const nomPaisActual          = nomPais.value;

        if (nomCiudadActual && nomPaisActual) {
            const desUrlApi = `http://api.openweathermap.org/data/2.5/weather?q=
                               ${nomCiudadActual},${nomPaisActual}&appid=${DES_KEY_API}&units=metric`;
            
            const respuestaApi      = await fetch(desUrlApi);
            const oInformacionClima = await respuestaApi.json();

            this.setState({
                temperatura: oInformacionClima.main.temp,
                desClima: oInformacionClima.weather[0].description,
                humedad: oInformacionClima.main.humidity,
                velocidadViento: oInformacionClima.wind.speed,
                nomCiudadClima: oInformacionClima.name,
                abrPaisClima: oInformacionClima.sys.country,
                desError: null
            });
        } else {
            this.setState({desError: 'Ingrese Ciudad a Consultar'})
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