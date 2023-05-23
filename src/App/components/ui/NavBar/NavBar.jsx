import React,{useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import styles from './NavBar.module.css';

const initialState={};

/**
 * temlateName component
 * @param {any} props
 * @returns React.component NavBar render
 */
const NavBar = (props) => {
    const [state, setstate] = useState(initialState);
    useEffect(() => {
      console.log('navBar Mounted');
    }, [])
  
return (
  <div className={styles.NavBar} data-testid="NavBar">
  NavBar Component
  </div>
)
};

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
