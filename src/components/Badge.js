// Este componente sera nuestra card, estara la info de cada usuario.(badge)
import React from 'react';

// Se importa la img del header, la foto del profile y el archivo donde estan los estilos .css de cada elemento (className)
import "./styles/Badge.css"
import confLogo from '../images/logo-navbar.png';
// import avatarLogo from '../images/avatar.jpg';
import Gravatar from './Gravatar';

// Se crea el componente Badge que extiende a la clase React.component.(siempre se crea con class). El Badge es la tarjeta con la info de cada usuario.
// El metodo render() es obligatorio para todo componente. Este define cual sera el resultado que se vera en pantalla
class Badge extends React.Component {
    render() {

        // const firstName = "Daniel";
        // const lastName = "Useche"

        return (
        <div className="Badge">
            <div className="Badge__header">
                {/* Se hace referencia a la imagen importada con llaves{} */}
                <img src={confLogo} alt="Logo Conferencia" />
                <h2>Code<b>Conf</b></h2>
            </div>

            <div className="Badge__section-name"> 
                <Gravatar //De esta manera se cambia la imagen del perfil por el componente gravatar que alterna la imagen segun el email.  
                className="Badge__avatar" 
                email={this.props.email} 
                alt="Avatar" 
                />
                <h1> {this.props.firstName} <br /> {this.props.lastName} </h1>
                {/* <h1> {firstName} <br /> {lastName} </h1> */}
            </div>

            <div className="Badge__section-info">
                {/* <h3>Frontend Developer</h3>
                <div>@Dev-Joshua</div> */}
                <h3>{this.props.jobTitle}</h3>
                <div>@{this.props.github}</div>
            </div>

            <div className="Badge__footer">#nuncaparesdeaprender💚</div>
        </div>
        )
    }
}

// Se exporta el componente
export default Badge;