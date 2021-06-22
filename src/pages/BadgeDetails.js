// (El componente es dividido en dos)Esta parte del componente es el que va presentar la interfaz.
// Como solo va cumplir una tarea que es presentar informacion se puede manejar con function. (Esto se determina porque no se tiene que hacer cambios en el estado).
import React from 'react';
import { Link } from 'react-router-dom';

import './styles/BadgeDetails.css';
import confLogo from '../images/code-logo.png';
import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal';

function BadgeDetails (props) {
  const badge = props.badge;

  return (
    <div>
        <div className="BadgeDetails__hero">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img src={confLogo} alt="Logo conferencia" />
              </div>
              <div className="col-6 BadgeDetails__hero-attendant-name">
                <h1>
                  {badge.firstName} {badge.lastName}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge 
              firstName={badge.firstName} 
              lastName={badge.lastName}
              email={badge.email} 
              github={badge.github} 
              jobTitle={badge.jobTitle}
              />
            </div>

            <div className="col">
              <h2>Actions</h2>
              <div>
                <div>
                  <div><Link className="btn btn-primary mb-4" to={`/badges/${badge.id}/edit`}>Edit</Link></div>
                </div>

                <div>
                  <button onClick={props.onOpenModal} className="btn btn-danger">Delete</button>
                  <DeleteBadgeModal 
                  isOpen={props.modalIsOpen} 
                  onClose={props.onCloseModal}
                  onDeleteBadge={props.onDeleteBadge} 
                  />
                  {/* isOpen={true}, es un prop que decidira si se despliega el MOdal. */}
                  {/* onClose sera el props para cerrar el mensaje emergente */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default BadgeDetails;

//A esta pagina se llegara desde el BadgeList.js, la lista de cada uno de los badges.

// Se usa el contenedor que ofrece bootstrap para que ayude a centrar el contenido y le de un ancho(.container.row.col)
//Adentro habran dos columnas (col-6), cada una medira la mitad de la pagina. la primera tendra la imagen del logo y la 2 el nombre del usuario.
//El nombre vendra con el badge asi que tendremos que buscar los datos. Entonces se hara una peticion.

//Despues del hero, se crea otro contenedor que tendra dos columnas. en la primera estara el badge(tarjeta badge) y en la segunda estaran las acciones.

//Este sera un componente funcional, no tiene manejo de estado. El manejo de estado le toca al contenedor (BadgeDetailsContainer.js)
//al contenedor se le pasara esta funcion 