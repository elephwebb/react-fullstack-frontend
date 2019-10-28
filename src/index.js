import 'materialize-css/dist/css/materialize.min.css';
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import App from './components/App';
import reducers from './reducers';

/**
 * Basic Redux Store with a dummy Reducer with an array and empty object {} as Action
 * @type {Store<Array, Action> & Store<S & StateExt, A> & Ext}
 */
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

/**
 * Create a Provider Tag that makes accesible the Redux Store to the whole application
 * The Redux stores the state of components registered to the Redux Store
 * We receive a App Component as child of the Provider Tag
 * Provider will be in charge of notify to all its child components in case a new state is available
 */
ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.querySelector('#root')
);