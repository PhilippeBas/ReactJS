import React from 'react';
import PropTypes from 'prop-types';
import styles from './TemplateName.module.css';

/**
 * temlateName component
 * @param {any} props
 * @returns React.component TemplateName render
 */
const TemplateName = (props) => {
     
return (
  <div className={styles.TemplateName} data-testid="TemplateName">
    {props.children}
  </div>
)
};

TemplateName.propTypes = {
  children: PropTypes.array.isRequired
};

TemplateName.defaultProps = {};

export default TemplateName;
