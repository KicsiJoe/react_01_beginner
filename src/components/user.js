import React, { Component } from "react";
import FormFields from "../widget/Forms/formFields";

class User extends Component {
  state = {
    formData: {
      name: {
        element: "input",
        value: "",
        label: true,
        labelText: "Name",
        config: {
          name: "name_input",
          type: "text",
          placeholder: "Enter your name",
        },
        validation: {
            required: true,
            minLen:5
        },
        valid: false,
        touched: false,
        validationMessage: ''
      },
      lastname: {
        element: "input",
        value: "",
        label: true,
        labelText: "Lastname",
        config: {
          name: "lastname_input",
          type: "text",
          placeholder: "Enter your Lastname",
        },
        validation: {
            required: true
        },
        valid: false,
        touched: false,
        validationMessage: ''
      },
      message: {
        element: "textarea",
        value: "Szöveg",
        label: true,
        labelText: "Message",
        config: {
          name: "message_input",
          rows: 4,
          cols: 27,
        },
        validation: {
            required: false
        },
        valid: true,
        
      },
      age: {
        element: "select",
        value: "",
        label: true,
        labelText: "Age",
        config: {
          name: "age_input",
          options: [
            { val: "1", text: "10-20" },
            { val: "2", text: "20-30" },
            { val: "3", text: "+30" },
          ],
        },
        validation: {
            required: false
        },
        valid: true
      },
    },
  };

  updateForm = (newState) => {
    // console.log(this.state)
    this.setState({
      formData: newState,
    });
    //    console.log(this.state)
  };

  submitForm = (event) => {
    event.preventDefault();

    let dataToSubmit = {};
    let formIsValid = true;


    for (let key in this.state.formData) {
      dataToSubmit[key] = this.state.formData[key].value;
    }

    for (let key in this.state.formData) {
       formIsValid = this.state.formData[key].valid && formIsValid;
    }

    if (formIsValid) {
        console.log(dataToSubmit)
    }

    /* console.log(dataToSubmit); */
    //    pl. felhasznalhato lehet igy is: axios.post(url, dataToSubmit)
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.submitForm}>
          <FormFields
            formData={this.state.formData}
            onblur={(newState) => this.updateForm(newState)}
            change={(newState) => this.updateForm(newState)}
          />

          {/* buttonnak submit-nak kell lennie,hogy mukodjon!! */}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default User;
