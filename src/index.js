import React from 'react';
import './styles/normalize.scss';
import './styles/global.scss';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

//ReactDOM zaimportowanymi z Reacta odpowiadają za wstawienie komponentu App (pierwszy arg) do wrapera z id app (drugi arg)
//Provider jest elementem Reduxa!
//Dzięki JSX nie musieliśmy dodawać "new" przy tylko piszemy < />
