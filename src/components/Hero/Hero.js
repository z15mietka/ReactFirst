import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const Hero = (props) => (
  <header className={styles.component}>
    <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2>
    <img className={styles.image} src={props.mainImage}></img>
  </header>
);

//W obiekcie poniżej zapisujemy typy właściwości przekazywanych do obiektu. Zawsze musi nazywać sie propTypes. Ale po co definiować typy?
Hero.propTypes = {
  titleText: PropTypes.node.isRequired,
  mainImage: PropTypes.node,
};

export default Hero;
