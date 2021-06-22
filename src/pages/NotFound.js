// Se crea la pagina 404 que arrojara el error si el usuario se dirige a una ruta no existente.
import React from 'react';
import './styles/NotFound.css';
import ImagenError from '../images/404.svg';

function NotFound () {
  return (
    <React.Fragment> 
      <img src={ImagenError} alt="Error 404" />
      <h1 className="Notfound">Not found</h1>
    </React.Fragment> 
  );
}


export default NotFound;