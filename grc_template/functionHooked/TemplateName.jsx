import React,{useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import styles from './TemplateName.module.css';

const initialState={};

/**
 * temlateName component
 * @param {any} props
 * @returns React.component TemplateName render
 */
const TemplateName = (props) => {
    const [state, setstate] = useState(initialState);
    useEffect(() => {
      console.log('templateName Mounted');
    }, [])
  
return (
  <div className={styles.TemplateName} data-testid="TemplateName">
  TemplateName Component
  </div>
)
};

TemplateName.propTypes = {};

TemplateName.defaultProps = {};

export default TemplateName;
