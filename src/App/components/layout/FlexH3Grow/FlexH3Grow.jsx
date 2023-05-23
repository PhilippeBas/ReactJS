import React from 'react';
import PropTypes from 'prop-types';
import styles from './FlexH3Grow.module.css';

/**
 * temlateName component
 * @param {any} props
 * @returns React.component FlexH3Grow render
 */
const FlexH3Grow = (props) => {
     
return (
  <div className={styles.FlexH3Grow} data-testid="FlexH3Grow">
    (props.children)
  </div>
)
};

FlexH3Grow.propTypes = {
  children: PropTypes.array.isRequired
};

FlexH3Grow.defaultProps = {};

export default FlexH3Grow;
