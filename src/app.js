import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers/index';
import Title from './components/Title';

const store = createStore(rootReducer);

class App extends React.Component {
	render() {
		return (
			// To extend the application, routing could be added here.
			<Title></Title>
		);
	}
}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);