import React, { Component } from 'react';
// import { Grid, Row, Col } from 'react-flexbox-grid';
import ButtonGo from './ButtonGo'
import events from './Data/events.json';
// import BuyButton from './BuyButton';

class EventsAll extends Component {

  render() {
    console.log(events);
    if (Object.keys(events.events).length > 0) {
      return (
      <div>
        {
          events.events.map(function(events){
            const img = events.imgEvent
            return <div key = {events.id} className="allEvents">{events.name} 
            <img src={img}/>
            <ButtonGo/>
            </div>            
          })
        }        
      </div>      
    )
    } else {
      return <p className="text-center">Cargando productos...</p>
    }
    
  }

}

export default EventsAll;


// <Grid>
//         <Row>
//           <Col className="userLeft" xs={12} md={3}>
//           <LateralMenu/>
//           </Col>
//           <Col className="imageRight" xs={12} md={9}>
//             <Images/>
//           </Col>
//         </Row>
//       </Grid>