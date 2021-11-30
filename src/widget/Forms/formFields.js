//rccp +TAB - a masodik a jó a gyorshoz:

/* import React, { Component } from 'react';
import PropTypes from 'prop-types';

class formFields extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

formFields.propTypes = {

};

export default formFields; */

/* rcep + TAB*/

/* import React, { Component } from 'react'

import PropTypes from 'prop-types'

export class formFields extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default formFields
 */

//rsc + TAB

/* import React from 'react';

const formFields = () => {
    return (
        <div>
            
        </div>
    );
};

export default formFields; */

//rscp + TAB

import React from "react";

const FormFields = (props) => {
  const renderFields = () => {
    const formArray = [];

    for (let elementName in props.formData) {
      formArray.push({
        id: elementName,
        settings: props.formData[elementName],
      });
    }
    /* console.log(formArray) */
    return formArray.map((item, i) => {
      return (
        <div key={i} className="form_element">
          {renderTemplates(item)}
        </div>
      );
    });
  };
  const changeHandler = (event, id, blur) => {
    /*  console.log(event.target.value) */
    let newState = props.formData;
    newState[id].value = event.target.value;

    if (blur) {
        //validalas:
      let validData = validate(newState[id]);

      newState[id].valid = validData[0];
      newState[id].validationMessage = validData[1];
    }
    newState[id].touched = true; // itt lehetne 'blur' is a true helyett

    props.change(newState);
  };

  const validate = (element) => {
    console.log(element);
    let error = [true, ""];

    if (element.validation.minLen) {
      const valid = element.value.length >= element.validation.minLen;
      const message = `${
        !valid ? "Must be greater than " + element.validation.minLen : ""
      }`;
      error = !valid ? [false, message] : error;
    }

    if (element.validation.required) {
      // ha nincs beírva semmi akkor valid = false;
      // ha be van írva valami, akkor a valid = true
      const valid = element.value.trim() !== "";
      const message = `${!valid ? "This field is required" : ""}`;
      // ha valid=false, akkor [] , ha nem akkor error = [true, '']
      error = !valid ? [false, message] : error;
    }

    return error;
  };

  const showValidation = (data) => {
    let errorMessage = null;

    if (data.validation.required && !data.valid) {
      errorMessage = (
        <div className="label_error">{data.validationMessage} </div>
      );
    }
    return errorMessage;
  };

  const renderTemplates = (data) => {
    let formTemplate = null;
    let values = data.settings;

    switch (values.element) {
      case "input":
        formTemplate = (
          <div>
            {values.label ? <label>{values.labelText + ":"}</label> : null}
            <input
              {...values.config}
              value={values.value}
              /* Ez egy react event: */
              onBlur={(event) => {
                changeHandler(event, data.id, true);
              }}
              onChange={(event) => {
                changeHandler(event, data.id, false);
              }}
            />
            {showValidation(values)}
            {/*    <input type={values.config.type}
                        value={values.value}
                        name={values.config.name}
                        placeholder={values.config.placeholder}
                        /> */}
          </div>
        );
        break;
      case "textarea":
        formTemplate = (
          <div>
            {values.label ? <label>{values.labelText + ":"}</label> : null}

            <textarea
              {...values.config}
              value={values.value}
              onChange={(event) => {
                changeHandler(event, data.id);
              }}
            />
          </div>
        );

        break;

      case "select":
        formTemplate = (
          <div>
            {values.label ? <label>{values.labelText + ":"}</label> : null}

            <select
              value={values.value}
              name={values.config.name}
              onChange={(event) => {
                changeHandler(event, data.id);
              }}
            >
              {values.config.options.map((item, i) => (
                <option key={i} value={item.val}>
                  {item.text}
                </option>
              ))}
            </select>
          </div>
        );

        break;

      default:
        formTemplate = null;
    }
    return formTemplate;
  };

  return <div>{renderFields()}</div>;
};

export default FormFields;
