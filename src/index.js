// CORE
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
// SCSS
import './index.scss';
import './components/Global/SCSS/base.scss';
// Components
import Navigation from './components/Global/Navigation/Navigation';
import MyComponent from './components/MyComponent/MyComponent';

const App = ({ children, location }) => (
	<div>
		<Navigation/>

		{React.cloneElement(children, {
			key: location.pathname
		})}
	</div>
);

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={MyComponent} />
		</Route>
	</Router>,
	document.getElementById('root')
);