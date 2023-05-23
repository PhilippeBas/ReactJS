import React,{useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

const initialState={};

/**
 * temlateName component
 * @param {any} props
 * @returns React.component Header render
 */
const Header = (props) => {
    const [state, setstate] = useState(initialState);
    useEffect(() => {
      console.log('header Mounted');
    }, [])
  
return (
  <div className={styles.Header} data-testid="Header">
  Header Component
  </div>
)
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
