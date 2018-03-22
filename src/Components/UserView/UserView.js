import React, {Component} 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';


class UserView extends Component {
  constructor(){
    super();
  }

  render(){
    return (
      <Grid>
        <Row>
          <Col {xs=12} {sm=12} {md= 6} {lg=6}>
            <div>
              <img src="https://image.ibb.co/krWwfH/user.png" alt="user">
            </div>
          </Col>
        </Row>
        <Row>
          <Col {xs=12} {sm=12} {md= 6} {lg=6}>
            <div>
              
            </div>
          </Col>
        </Row>
      </Grid>
    )
  }

}