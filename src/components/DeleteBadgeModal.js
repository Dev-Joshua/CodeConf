// Se crea este componente en base al Modal. Aqui especializamos este componente para el mensaje al dar delete.
import React from 'react';

import Modal from './Modal';


function DeleteBadgeModal (props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}> 
      <div className="DeleteBadgeModal"> 
        <h1>¿Are you sure?</h1>
        <p>You are about to delete this badge.</p>

        <div>
          <button onClick={props.onDeleteBadge} className="btn btn-danger">Delete</button>
          <button onClick={props.onClose} className="btn btn-primary">Cancel</button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteBadgeModal;