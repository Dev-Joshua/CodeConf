// Se crea una nueva pagina (Badges). En este lugar se presentara toda la informacion y lista de los Badges de cada usuario.
import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';//Los estilos se aplican a esta pagina.
import confLogo from '../images/code-logo.png';//Se importa la img del header y la lista de badges.
import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import api from '../api';//Se importa el archivo api.


// Se van a usar datos reales que vengan de una api a nuestra aplicacion.
// La llamada a una api consta de estos 3 estados (loading, error, data).
class Badges extends React.Component {
    state = {//Este es el estado del componente. aqui se guardan los datos.
        loading: true,
        error: null,
        data: undefined
    };

    componentDidMount () {//Este es el mejor lugar para comenzar una peticion a una Api. Nos asegura que el codigo del componente ya esta listo.
        this.fetchData()
    }

    // Se declara el metodo (fetchData). Esta funcion sera asincrona(async),se usa (await) para esperar la contestacion.  
    fetchData = async () => {
        this.setState({ loading: true, error: null });//Se declara el estado. 

        try {//Se comienza la llamada a (api.badges) donde queremos la lista de todos los badges. 
            const data = await api.badges.list();//Esta llamda es asincrona(regresa una promesa).
            this.setState({ loading: false, data: data });//En caso de que se obtengan los datos o 
        } catch (error) {
            this.setState({ loading: false, error: error });//ocurra un error se suspendera el loading.
        }
    };

    render() {//Se maneja primero el estado donde Loading sea cierto(true).
        if (this.state.loading === true) {
            return <PageLoading />
        }

        if (this.state.error) {//Se maneja otro caso cuando suceda error en el estado.
            return <PageError error={this.state.error} />
        }

        return (
            <React.Fragment>
                {/* <Navbar /> */}
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img 
                            className="Badges_conf-logo" 
                            src={confLogo} 
                            alt="Conf-Logo" 
                            />
                        </div>
                    </div>
                </div> 

                {/*Este contenedor tendra el boton y la lista de Badges*/}
                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/Badges/new" className="btn btn-primary">
                            New Badge
                        </Link>
                {/* (Link to) internamente tiene un elemento <a> pero va a interceptar el clic para navegar de manera interna sin refrescar toda la página. */}
                    </div>

                    <div className="Badges__list">
                        <div className="Badges__container">
                            <BadgesList badges={this.state.data} />
                        </div>
                    </div>
                </div>
            </React.Fragment> 
                                    
        );
    };  
}

export default Badges;

//<BadgesList Badges={}> badges es igual al data que se encuentra en el estado. Se incorpora este componente a la pagina badges