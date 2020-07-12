import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Inicio } from './componentes/Inicio';
import { Navbar } from './componentes/Navbar';

import { Producto } from './componentes/Producto';
import ListarCategoria from './componentes/categoria/ListarCategoria';
import { Sku } from './componentes/Sku';

const App = () => {

  return (
    <Router>
      <Navbar></Navbar>

      <div className="container p-4">
        <Switch>
          <Route exact stric path="/" component={Inicio} />
          <Route exact stric path="/productos" component={Producto} />
          <Route exact stric path="/categoria" component={ListarCategoria} />
          <Route exact stric path="/sku" component={Sku} />
 
        </Switch>
      </div>
    </Router>
  );
}

export default App