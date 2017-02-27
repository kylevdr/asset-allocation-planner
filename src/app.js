import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers/index';
import Main from './components/Main';

const store = createStore(rootReducer);

class App extends React.Component {
	render() {
		return (
			// To expand the application, routing could be added here.
			<Main></Main>
		);
	}
}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);