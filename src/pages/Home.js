import React from 'react';
import {Link} from 'react-router-dom';

import './styles/Home.css';
import ImagenHome from '../images/Home.svg';
import CodeLogo from '../images/code-logo.png';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
            <div className="container__uno">
              <img 
              src={ImagenHome} 
              alt="Logo-conf"
              className="img-logo"
               />
               <h1>Welcome to CodeConf</h1>
               <Link className="btn btn-primary" to="/badges">Get Started</Link>
            </div>

            <div className="container__dos">
              <img 
              src={CodeLogo} 
              alt="Fondo-logo"
              className="img-fondo" 
              />
            </div>
      </div>
    );
  }
}

export default Home;