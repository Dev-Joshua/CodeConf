//Se crea el componente para la single page app. Tendra el browser router, se añadiran las rutas de la app.
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from '../components/Layout';
import Home from '../pages/Home';
import BadgeNew from '../pages/BadgeNew';
import BadgeDetails from '../pages/BadgeDetailsContainer';
import BadgeEdit from '../pages/BadgeEdit';
import Badges from '../pages/Badges';
import NotFound from '../pages/NotFound';


function App() {
  return (
    <BrowserRouter basename="/CodeConf/">
      <Layout>
        <Switch>
          {/* Aqui adentro se pondran las rutas de la app. (path) es la ruta. */}
          <Route exact path="/" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/badges/:badgeId" component={BadgeDetails} />
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
//Se usa(:badgeID) por lo que se va a editar un badge en especifico que ya se ha creado, se tendra acceso a ese badge con el id.
// Se usa (Switch) para que tome la direccion que esta en el navegador, y va a renderizar una sola ruta.
//La primera que coincida con esa direccion.  (exact)->Se le especifica que la ruta es exacta por lo que tienen la misma palabra badges.

//Con <Layout> se va a implementar el componente Navbar a las rutas que esten dentro de esta etiqueta.
// Esto debido a que el componente Navbar es codigo repetido.