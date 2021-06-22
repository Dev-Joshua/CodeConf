//Se crea el componente Modal que va eliminar nuestro badge. Esta va a ser la base del modal.
//Se importa ReactDOM porque vamos a usar portales.
import React from 'react';
import ReactDOM from 'react-dom'; 

import './styles/Modal.css';

function Modal (props) {
  if (!props.isOpen){//Si (props.isopen), (!) no esta open se regresa null.
    return null;
  }

  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal__container">
        <button onClick={props.onClose} className="Modal__close-button">x</button>
        
        {props.children}
      </div>
    </div>,
    document.getElementById('modal')
  )
}

export default Modal;

//El modal va ser como un mensaje de confirmacion. Se le da forma mediante los estilos en css. Este archivo se importa.
//El modal es algo que queremos abrrir o cerrar. Es decir, queremos controlarlo, no que sea permanente.
//Por eso se usa el prop isOpen(Su trabajo es decidir si se despliega o no el MODAL). Este prop se declara en BAdgeDEtails Modal.

//Dentro del modal hay contenido,Este contenido siempre va a venir a traves de los children {props.children}.
//El que se use children aqui va a permitir en un futuro especificar de que es el modal. Que sera un DELETEBADGEMODAL.

//El prop onClose vendra de BadgeDetails.js
//{ReactDOM.createPortal(que(renderizar), donde(lo queremos renderizar)document.getElementById}