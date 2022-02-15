import React from 'react';
import styles from './Search.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import { withRouter } from 'react-router';
import { settings } from '../../data/dataStore';

class Search extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  };

  state = {
    value: '',
    visibleButtons: false,
  };

  handleChange(event) {
    this.setState({
      value: event.target.value,
      visibleButtons: event.target.value.length > 0,
    });
  }

  handleOK() {
    this.props.history.push(`/search/${this.state.value}`);
  }

  render() {
    const { value } = this.state;
    const { icon } = settings.search;
    return (
      <div className={styles.component}>
        <input
          type="text"
          value={value}
          onChange={(event) => this.handleChange(event)}
        />
        <div className={styles.buttons}>
          <Button onClick={() => this.handleOK()}>
            <Icon name={icon} />
          </Button>
        </div>
      </div>
    );
  }
}

export default withRouter(Search);
