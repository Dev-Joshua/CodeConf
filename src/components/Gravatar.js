//Se crea un componente que va a ser funcional porque no tiene ningun tipo de estado(state);
import React from 'react';
import md5 from 'md5';

//Esta funcion recibe (props) porque vamos a querer leer el email de los props.
//Al email se le va a sacar el valor del md5. Se debe importar su libreria.
function Gravatar (props) {
  const email = props.email;
  const hash = md5(email);//hash es igual a md5 del email.

  return ( //Retornara la imagen deoendiendo del hassh de la libreria md5.
    <img 
    className={props.className} src={`https://es.gravatar.com/avatar/${hash}?d=identicon`} alt="Avatar" />
  );
}

export default Gravatar;

//Este componente nos ayudara a que la imagen de perfil(gravatar), sea diferente segun el email, gracias a la libreria  md5.