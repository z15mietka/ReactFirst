import React from 'react';
import styles from './SearchResult.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
// import { settings } from '../../data/dataStore';
import Icon from '../Icon/Icon';
// import { settings } from '../../data/dataStore';

class SearchResult extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
  };

  // static defaultProps = {
  //   icon: settings.defaultColumnIcon,
  // };

  render() {
    const { cards } = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name="list" />
          </span>
          Search Results
        </h3>

        {cards.map((cardData) => (
          <Card key={cardData.id} {...cardData} />
        ))}
      </section>
    );
  }
}

export default SearchResult;
