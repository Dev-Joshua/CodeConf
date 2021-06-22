// Se crea la pagina que mostrara los detalles de cada badge. Este componente lo dividimos en dos para que no quede sobrecargado.
//BadgeDetailsContainer se encargara de la logica. Manejara los estados
import React from 'react';

import BadgeDetails from './BadgeDetails';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import api from '../api';


class BadgeDetailsContainer extends React.Component {
  state = {//Se manejaran los estados de la peticion.
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false, 
  }
  componentDidMount() {
    this.fetchData()
  }
  fetchData = async () => {
    this.setState({ loading: true, error: null })

    try {//Esta sera la peticion, badges.read leera el id. Este lo obtendremos de la url y podemos acceder mediante(this.props.match.params.badgeId)
      const data = await api.badges.read(this.props.match.params.badgeId); 

      this.setState({ loading: false, data: data })//Si consigo los datos se apagara el loading y se guardaran en el estado.
    }catch(error){
      this.setState({ loading: false, error: error })
    }
  };

  
  handleOpenModal = e => {
    this.setState({ modalIsOpen: true });
  };
  handleCloseModal = e => {
    this.setState({ modalIsOpen: false });
  };
  handleDeleteBadge = async e => {
    this.setState({ loading: true, error: null })

    try {
      await api.badges.remove(this.props.match.params.badgeId);
      this.setState({ loading: false });

      this.props.history.push('/badges');
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {//Condicionals (if) si esta loading, retornara PageLoading. lo mismo con error
    if (this.state.loading) {
      return <PageLoading />
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />
    }


    return(//estos props se declaran como funciones en este componente container. 
      <BadgeDetails 
      onCloseModal={this.handleCloseModal} 
      onOpenModal={this.handleOpenModal}
      modalIsOpen={this.state.modalIsOpen}//viene del estado.(state)
      onDeleteBadge={this.handleDeleteBadge}
      badge={this.state.data} 
      />
    );
  }
}

export default BadgeDetailsContainer;

//Como se va a hacer una peticion para traer los datos del badge se inicializa el estado.(state).
//Los datos se van a traer cuando el (componentDidMount()) este listo.

//Se retorna el componente BadgeDetails.js que tendra la interfaz
//Se le pasa el prop onCloseModal={} para manejar el cierre del Modal.

