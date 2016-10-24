// CORE
import React from 'react';
import { Link } from 'react-router'
// SCSS
import './Navigation.scss';

const Navigation = (props) => {
	return (
		<nav className="Navigation">
			<ul>
				<li><Link to={'/'}>Home</Link></li>
			</ul>
		</nav>
	);
};

export default Navigation;
