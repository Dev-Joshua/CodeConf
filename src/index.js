import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'; // Se instala bootstrap en el proyecto y se le hace referencia al archivo css que queremos.
import './global.css'; //Se importa el archivo css, y las paginas Badgenew y Badges.
// import BadgeNew from './pages/BadgeNew';
// import Badges from './pages/Badges';
import App  from './components/App'; //Se crea este nuevo componente. Este tendra mi browser router y mis rutas para la single page app.


//Esta constante guarda el Id(app). Enlaza con el template del index.html
const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
// El componente Badge se debe encerrar para que sea un elemento. <>
ReactDOM.render(<App />, container);
