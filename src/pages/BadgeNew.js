// Se crea una pagina nueva. Esta sera un componente y dentro de este iran mas componentes
import React from 'react';

// Se importa la imagen de fondo(header.svg), los estilos de esta seccion(.css) y los componentes
import './styles/BadgeNew.css'
import header from '../images/code-logo.png';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import api from '../api';
import PageLoading from '../components/PageLoading';


class BadgeNew extends React.Component {
    state = {
        loading: false,//Se manejan estos estados para la peticion de enviar los datos despues de clickear el boton save.
        error: null,//Se visualizara el tiempo de espera con(loading), y si sucede un error(null). para cuando se envie la peticion

        form: { //En este estado se guardara la informacion de los inputs. Se inicializan los valores del formulario:
            firstName: "",
            lastName: "",
            email: "",
            jobTitle: "",
            github: "",
    },};
    // Este metodo recibira el evento y cuando lo reciba va a hacer un setState(Escribir estado).
    handleChange = e => {
        this.setState({
            form: {//(...)En esta declaracion se dejan caer todos los valores de (this.state.form) y se puede añadir o sobreescribir el valor.
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };
    //Este metodo sera una funcion que va a recibir un evento que se debe detener.(esto para que el navegador aun no envie los datos)
    //Esta funcion sera una llamada asincrona.
    handleSubmit = async e => {
        e.preventDefault()
            this.setState({ loading: true, error: null })
        try {
            await api.badges.create(this.state.form)
            this.setState({ loading: false })
            //Se usa un prop (hystory->redirigir) que las paginas reciben, porque las paginas se las damos a las rutas de REACT ROUTER.
            this.props.history.push('/badges');//Con esta linea le indicamos que regrese a la pagina de(badges), despues de guardar el formulario.
        } catch (error) {
            this.setState({ loading: false, error: error })//Cuando se envie la peticion, si tira un error se va a cachar y se guardara en el estado.
        }
    }

    render() {//En caso que loading se encienda regresara la visualizacion del loading.
        if (this.state.loading) {//Si el estadoo de loading es cierto se retornara el PageLoading(componente).
            return <PageLoading />
        }

        return (
            <React.Fragment>
                {/* <Navbar/> */}
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo" />
                </div>
                {/* El badge esta en una columna que ocupara la mitad de su fila(col-6). BadgeForm esta en otra columna */}
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge //La informacion que escribamos en el form va a aparecer en nuestro badge mediante los siguientes props.
                                firstName={this.state.form.firstName || 'Frist_Name'}//(||)Se agrega valor por omision. Se vera esto'', en caso de no haber datos.
                                lastName={this.state.form.lastName || 'Last_Name'}
                                email={this.state.form.email || 'Email'}
                                jobTitle={this.state.form.jobTitle || 'Job_Title'}
                                github={this.state.form.github || 'Github'}
                                avatarUrl="https://es.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
                             />
                        </div>
                {/* //Para que se obtenga en BadgeNew el (state y handdleChange) se pasara como un prop(onChange) al BadgeForm.
                    Se pasaran los valores del formulario desde BadgeNew a BadgeForm a cada input con (formValues) */}
                         <div className="col-6">
                            <h1>New Attendant</h1>
                            <BadgeForm 
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}//Queremos manejar el submit(envio de informacion)
                                formValues={this.state.form}
                                error={this.state.error}//Se añade un nuevo prop error, asi se visualizara el error dentro del formulario en vez de una imagen en toda la ventana.
                            />
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default BadgeNew;