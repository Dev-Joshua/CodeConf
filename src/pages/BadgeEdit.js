// Se crea la pagina donde se puede editar un badge en especifico con su respectivo id. Esta sera un componente para app.js
import React from 'react';

// Se importa los estilos y los componentes
import './styles/BadgeEdit.css';
import header from '../images/code-logo.png';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading';
import api from '../api';


class BadgeEdit extends React.Component {
    state = {
        loading: true,
        error: null,
        form: { //En este estado se guardara la informacion de los inputs. Se inicializan los valores del formulario:
            firstName: "",
            lastName: "",
            email: "",
            jobTitle: "",
            github: "",
    },};

    // Cuando el componentDidMount() ocurra, se comenzara a buscar los datos. Esta sera una peticion a la api para que regrese los datos del badge.
    componentDidMount() {
        this.fetchData()
    };

    // Se define la funcion(fetchData) asincrona para pedir los datos.
    fetchData = async e => {
        this.setState({ loading: true, error: null })

        try {//.read va tomar el id del badge que nos interesa editar.
            const data = await api.badges.read(this.props.match.params.badgeId);//El id se lee mediante el prop .match.params
            this.setState({ loading: false, form: data })//Los datos se guardaran en los espacios del form(formulario)
        }catch (error) {
            this.setState({ loading: false, error: error })
        }
    };

    handleChange = e => {
        this.setState({
            form: {//(...)En esta declaracion se dejan caer todos los valores de (this.state.form) y se puede añadir o sobreescribir el valor.
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    //este handlesubmit no sera de create sino de update(actualizar). update recibe un badgeId y la informacion que se quiere actualziar.
    handleSubmit = async e => {//El badgeid se obtiene de this.props.match.params.badgeId.
        e.preventDefault()
            this.setState({ loading: true, error: null })
        try {
            await api.badges.update(this.props.match.params.badgeId, this.state.form)//Update tiene dos argumentos, el segundo sera ver la infor del formulario.
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
                <div className="BadgeEdit__hero">
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
                            <h1>Edit Attendant</h1>
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

export default BadgeEdit;