import React,{useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import styles from './MemeForm.module.css';

const initialState={};

/**
 * temlateName component
 * @param {any} props
 * @returns React.component MemeForm render
 */
const MemeForm = (props) => {
    const [state, setstate] = useState(initialState);
    useEffect(() => {
      console.log('memeForm Mounted');
    }, [])
  
return (
  <div className={styles.MemeForm} data-testid="MemeForm">
  MemeForm Component
  </div>
)
};

MemeForm.propTypes = {};

MemeForm.defaultProps = {};

export default MemeForm;
