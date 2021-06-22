// Se crea el componente que sera una pagina en blanco con un loading, mientras carga la lista de badges.
import React from 'react';
import './styles/PageLoading.css';
import Loader from './Loader';

//La funcion va a retornar el componente Loader
function PageLoading () {
  return (
    <div className="PageLoading">
      <Loader />
    </div>
  ); 
}

export default PageLoading;