import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavBar.module.css';
import { Container,Navbar,Nav } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';



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
            <LinkContainer to="/"><Navbar.Brand href="#">Navbar</Navbar.Brand></LinkContainer>
            <Nav className="me-auto">
              <LinkContainer to="/thumbnail">
                <Nav.Link href="#">thumbnail</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Meme">
                <Nav.Link href="#">Meme</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Meme/1">
                <Nav.Link href="#">Meme1</Nav.Link>
              </LinkContainer>
            </Nav>
          </Container>
        </Navbar>
    </div>
  )
};


export default NavBar;
