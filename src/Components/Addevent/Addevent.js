import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Row, Col, Grid } from 'react-bootstrap';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

class Addevent extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ''
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <Row className="content">
        <h3>Añadir un Evento</h3>
        <form>
          <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
            <ControlLabel>Título</ControlLabel>
            <FormControl
            type="text"
            value={this.state.value}
            placeholder="Titulo del Evento"
            onChange={this.handleChange}
          />
            <FormControl.Feedback />
            <HelpBlock>El titulo debe contener un min de 10 caracteres</HelpBlock>
          </FormGroup>
          <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
            <ControlLabel>Precio</ControlLabel>
            <FormControl
            type="text"
            value={this.state.value}
            placeholder="Precio"
          />
            <FormControl.Feedback />
          </FormGroup>
        </form>
      </Row>
    );
  }
}

export default Addevent;
