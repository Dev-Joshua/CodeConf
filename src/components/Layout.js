// Se crea el componente Layout, aqui traeremos nuestro codigo repetido para que se comparta en cada pagina.
import React from 'react';
import Navbar from '../components/Navbar';//Se importa el componente repetido que queremos compartir.

// Con el props especial Children se va a poder leer el codigo que esta dentro de la etiqueta <Layout> en APP.JS.
function Layout (props) {
  return (
    <React.Fragment>
      <Navbar />
      {props.children}
    </React.Fragment>
    );
  }


export default Layout;

// React.Fragment Reemplaza la etiqueta div. Esta es invisible en consola y evita tanta acumulacion de etiquetas <div>.
// {props.children} Va a retornar el contenido que esta dentro de LAYOUT en APP.JS.
// Dentro de <React.Frament> ira el contenido que queremos compartir, en este caso el componente Navbar.