import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Grid, Row } from 'react-bootstrap';
import Home from './Components/Home/Home';
// import EventsAll from './Components/EventsAll.js'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './App.css';

const App = () => (
  <Router>
    <div>
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">EventsApp</Link>
          </Navbar.Brand>
        </Navbar.Header>       
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              <Link to="/about">Registrarse</Link>
            </NavItem>
            <NavItem eventKey={2} href="#">
              <Link to="/topics">Iniciar sesión</Link>
            </NavItem>
          </Nav>
      </Navbar>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />

      <Navbar collapseOnSelect>       
          <Nav>
            <NavItem eventKey={1} href="#">
              <Link to="/">Quienes somos</Link>
            </NavItem>
            <NavItem eventKey={2} href="#">
              <Link to="/about">Contacto</Link>
            </NavItem>
            <NavItem eventKey={2} href="#">
              <Link to="/topics">Ayuda</Link>
            </NavItem>
            <NavItem eventKey={2} href="#">
              <Link to="/topics">Temas</Link>
            </NavItem>
            <NavItem eventKey={2} href="#">
              <Link to="/topics">Blog</Link>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  </Router>
);

const Inicio = () => (
  <div>
    <h2>Inicio</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Abosdut = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Abfghout = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Abhjkout = () => (
  <div>
    <h2>About</h2>
  </div>
);

// <Navbar.Collapse>        
//           <Nav pullRight>
//             <NavItem eventKey={1} href="#">
//               <Link to="/about">Registrarse</Link>
//             </NavItem>
//             <NavItem eventKey={2} href="#">
//               <Link to="/topics">Iniciar sesión</Link>
//             </NavItem>
//           </Nav>
//         </Navbar.Collapse>