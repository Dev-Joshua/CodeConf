// Se crea el componente sobre el cual se aplicaran los estilos de animacion para el Loading.
import React, { Component } from 'react';
import './styles/Loader.css';

export default class Loader extends Component {
  render() {
    return (
      <div className="lds-roller">
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
      </div>
    );
  }
}