import React, { Component } from "react";


class Uncontrolled extends Component {

handlesubmitClick = (event) => {
    event.preventDefault();
    const values = {
        name: this.name.value ,
        lastname: this.lastname.value
    }
    console.log(values)
}
  render() {

    return (
      <div>
        <div className="container">
          <form>
            <div className="form_element">
              <label>Enter name:</label>
              <input type="text" ref={input1 => (this.name = input1)} />
            </div>
            <div className="form_element">
              <label>Last name:</label>
              <input type="text" ref={input2 => (this.lastname = input2)}/>
            </div>
            <button onClick={this.handlesubmitClick}>Sign in</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Uncontrolled;
