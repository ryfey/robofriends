import React from 'react';
import ReactDOM from 'react-dom';
import { createStore , applyMiddleware, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import 'tachyons';

import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { searchRobots, requestRobots } from './reducers'

import './index.css';

const logger = createLogger();

const rootReducer = combineReducers({searchRobots, requestRobots})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
	<Provider  store={store}>
		<App />
	</Provider>,  
		document.getElementById('root')
	);
serviceWorker.unregister();