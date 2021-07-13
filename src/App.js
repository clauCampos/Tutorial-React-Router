import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PaginaInicio from './paginas/PaginaInicio';
import PaginaUsuario from './paginas/PaginaUsuario';

export default function App() {
  return (
      <Switch>
          <Route exact path="/" component={PaginaInicio} />
          <Route path="/:nombre" component={PaginaUsuario} />
      </Switch>
  );
}