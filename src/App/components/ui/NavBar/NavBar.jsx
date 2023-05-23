import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavBar.module.css';
import { Container,Navbar,Nav } from 'react-bootstrap';



/**
 * temlateName component
 * @param {any} props
 * @returns React.component NavBar render
 */
const NavBar = (props) => {

  return (
    <div className={styles.NavBar} data-testid="NavBar">
        <Navbar bg="dark" variant="dark" >
          <Container fluid>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
    </div>
  )
};


export default NavBar;
