import React,{useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';

const initialState={};

/**
 * temlateName component
 * @param {any} props
 * @returns React.component Footer render
 */
const Footer = (props) => {
    const [state, setstate] = useState(initialState);
    useEffect(() => {
      console.log('footer Mounted');
    }, [])
  
return (
  <div className={styles.Footer} data-testid="Footer">
  Footer Component
  </div>
)
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
