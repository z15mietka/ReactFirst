import React from 'react';
import styles from './Container.scss';
import PropTypes from 'prop-types';

const Container = (props) => (
  <div className={styles.component}>{props.children}</div>
);

//W obiekcie poniżej zapisujemy typy właściwości przekazywanych do obiektu. Zawsze musi nazywać sie propTypes. Ale po co definiować typy?
Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
