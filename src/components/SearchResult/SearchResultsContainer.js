import { getCardsForSearchResults } from '../../redux/cardsRedux';
import SearchResult from './SearchResult';
import { connect } from 'react-redux';

const mapStateToProps = (state, props) => {
  const searchString = props.match.params.id;

  return {
    cards: getCardsForSearchResults(state, searchString),
  };
};

export default connect(mapStateToProps)(SearchResult);
