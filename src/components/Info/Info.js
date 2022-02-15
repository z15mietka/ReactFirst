import React from 'react';
import PropTypes from 'prop-types';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { infoData } from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={infoData.title} mainImage={infoData.image} />
    <p>{infoData.description}</p>
  </Container>
);

Info.propTypes = {
  title: PropTypes.node.isRequired,
  image: PropTypes.node,
  description: PropTypes.node,
};

export default Info;
