//Se crea este nuevo componente el cual tendra la lista de nuestors elementos Badges y se usara en la pagina (Badges).

import React from 'react';
import { Link } from 'react-router-dom'; //Se importa el Link para el boton (crear nuevo badge).
import './styles/BadgesList.css';
import Gravatar from './Gravatar';

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <Gravatar email={this.props.badge.email} className="BadgesListItem__avatar"/>
        <div>
          <strong>{this.props.badge.firstName} {this.props.badge.lastName}</strong>

          <div className="Twitter__name">
             <span className="Twitter__logo"></span>@{this.props.badge.github}
          </div>

          <div>{this.props.badge.jobTitle}</div>
        </div>
      </div>
    );
  }
}


class BadgesList extends React.Component {
  render() {//Si no hubo ningun dato en la llamada a api se va a regresar un div donde diga lo siguiente.
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      )
    }

    return (//Esta sera una lista sin estilo.                
    <div className="BadgesList">
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
          return (      
            <li key={badge.id}>
              <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                <BadgesListItem badge={badge} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
    );
  }
}


export default BadgesList;
//map() es funcion sobre los arrays. Esta recibe una funcion como argumento y regresa otro valor. se hace para renderizar la lista de componentes.
//{this.props.badges}=>(Cada objeto que se tenga en data(badges.js) se convertira a un elemento)
//(badge)=>Por cada uno de los datos nos va dar un badge y este badge lo queremos regresar como elemento (<li>).
//(key) es un prop que ayuda a react, es un identificador unico que se debe usar siempre que enlistamos varios elementos.

//Dentro de la funcion map(), se añade (Link to), asi cada badge sera un link a la pagina de detalles de ese respectivo badge.
//Para eso se pasa el id del badge to={`/badges/${badge.id}`}

//la clase text-reset decoration-none -> es de bootstrap para quitar el estilo azul del link.