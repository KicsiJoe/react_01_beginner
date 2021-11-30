import React, { Component } from 'react';

class Controlled extends Component {

    state = {
        name: '',
        lastname: ''
        
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
        console.log(this.state.name )
    }
    handleLastNameChange = (event) => {
        this.setState({
            lastname: event.target.value
        })
        console.log(this.state.lastname )
    }

    onshandler = (event) => {
        event.preventDefault();
        console.log(this.state)
    }


    render(){
        return(
            <div className="container">
                <form onSubmit={this.onshandler}>
                    <div className="form_element">
                        <label>
                            Enter name:
                        </label>
                        <input type="text"
                        onChange={this.handleNameChange}
                        value={this.state.name}
                        />
                        
                        </div>   
                        <div className="form_element">
                        <label>
                            Last name:
                        </label>
                        <input type="text"
                        value={this.state.lastname}
                        onChange={this.handleLastNameChange}
                        />
                        </div>
                        <button type="submit">Sign in</button>
                </form>  
            </div>
        )
    }
}



export default Controlled;