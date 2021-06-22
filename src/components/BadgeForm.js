// Se crea el componente que vendria siendo el formulario.
// Tambien estamos enlanzando eventos.(Conectar la accion que hace el usuario con nuestros componentes de React)
import React from 'react'

//Se crean 3 metodos que estan manejando los eventos del formulario. handleChange(cambios en el input),handleClick(el click en el boton), handleSubmit(envio del formulario).
class BadgeForm extends React.Component {
    // state = {}; // se inicializa el estado con un objeto vacio. 
    
    //Este bloque de codigo no se usara, por lo que la informacion del formulario que se guarda en estado va a pasar a (BadgeNew).
    //Es decir (handdleChange) le pertenecera a BadgeNew.

    // handleChange = e => {
    //     //(setState)Funcion de la clase (.Component). Se le pasa un objeto con la informacion del campo que queremos guardar en estado.
    //     this.setState({
    //         // Se guardara el valor en su respectivo input
    //         [e.target.name]: e.target.value,
    //     });
    // };

    handleClick = e => {
        console.log('Button was clicked');
    };
    // Cuando se de click (e), se enviara el formulario con este metodo. tambien aparecera en consola la info guardada.
    // handleSubmit = e => {
    //     e.preventDefault();
    //     console.log('Form was submitted');
    //     console.log(this.state);
    // };

    render() {
        return (
            <div>
                {/*(form-group)forma de darle estilos a una caja de texto.Incluida en bootstrap*/}
                {/*(onChange) y (onClick) Son eventos de react que se pueden aplicar a las estiquetas. 
                Se maneja con metodos de la clase (handle.Change)(handleClick). Estos se crean arriba.
                Con onsubmit enviamos el formulario*/}
                {/*Nos aseguramos de que cuando el form se envie, se llame al prop{this.props.onSubmi} */}
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input 
                            //onChange={this.handleChange}. Se cambia a (prop.Onchange)
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" name="firstName"
                            //value={this.state.firstName}. Se le pasa el prop(value) para controlar cada uno de los imputs,{leer.delestado.firstname} 
                            value={this.props.formValues.firstName}
                        />
                    </div>
                    
                    <div className="form-group">
                        <label>Last Name</label>
                        <input 
                        onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" name="lastName" 
                        //Con esta modificacion en value(props.formValues), el input recibira el valor de (BadgeNew).
                        value={this.props.formValues.lastName}/>
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input onChange={this.props.onChange} className="form-control" type="email" name="email" value={this.props.formValues.email}/>
                    </div>

                    <div className="form-group">
                        <label>Job Title</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="jobTitle" value={this.props.formValues.jobTitle}/>
                    </div>

                    <div className="form-group">
                        <label>Github</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="github" value={this.props.formValues.github}/>
                    </div>

                    <button type="submit" onClick={this.handleClick} className="btn btn-primary">Save</button>

                    {this.props.error && (//Si si existe(&&) este error, se va a desplegar este mensaje en el formulario, Condicionalmente.
                        <p className="text-danger">{this.props.error.message}</p>//la clase(text-danger) es de la libreria bootstrap
                    )}
                </form>
            </div>
        );
    }
}

export default BadgeForm;