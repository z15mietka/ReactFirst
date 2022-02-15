//dzięki temu importowi poniżej mogę skorzystać z connetct wyjaśnienie przy connect
import { connect } from 'react-redux';
import Home from './Home';

// mapStateToProps dopowiada za połączenie właściwości ze stanem aplikacji. Ta metoda została odziedziczona z Reduxa?
const mapStateToProps = (state) => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: state.lists,
});

export default connect(mapStateToProps)(Home);
//connect odpowiada za połączenie ze storem (magazynem), czyli stanem aplikacji
