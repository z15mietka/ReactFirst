import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { faqData } from '../../data/dataStore';
import PropTypes from 'prop-types';

const Faq = () => (
  <Container>
    <Hero titleText={faqData.title} mainImage={faqData.image} />
    <p>{faqData.description}</p>
  </Container>
);

Faq.propTypes = {
  title: PropTypes.node,
  image: PropTypes.node,
  description: PropTypes.node,
};

export default Faq;
