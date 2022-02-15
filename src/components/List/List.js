import React from 'react';
import Hero from '../Hero/Hero';
import styles from './List.scss';
import PropTypes from 'prop-types';
import Column from '../Column/ColumnContainer';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator';
import Container from '../Container/Container';

class List extends React.Component {
  // state = {
  //   columns: this.props.columns || [],
  // };

  //W obiekcie poniżej zapisujemy typy właściwości przekazywanych do obiektu. Zawsze musi nazywać sie propTypes. Ale po co definiować typy?
  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
    image: PropTypes.node,
    addColumn: PropTypes.func,
  };

  static defaultProps = {
    description: ReactHtmlParser(settings.defaultListDescription),
  };

  // addColumn(title) {
  //   console.log('this.props.columns', this.props.columns);
  //   this.setState((state) => ({
  //     columns: [
  //       ...state.columns,
  //       {
  //         key: state.columns.length
  //           ? state.columns[state.columns.length - 1].key + 1
  //           : 0,
  //         title,
  //         icon: 'list-alt',
  //         cards: [],
  //       },
  //     ],
  //   }));
  // }

  render() {
    const { title, image, description, columns, addColumn } = this.props;
    return (
      <Container>
        <section className={styles.component}>
          <Hero titleText={title} mainImage={image} />
          <div className={styles.description}>
            {ReactHtmlParser(description)}
          </div>

          <div className={styles.columns}>
            {columns.map((columnData) => (
              <Column key={columnData.id} {...columnData} />
            ))}
          </div>

          <div className={styles.creator}>
            <Creator text={settings.columnCreatorText} action={addColumn} />
          </div>
        </section>
      </Container>
    );
  }
}

export default List;
