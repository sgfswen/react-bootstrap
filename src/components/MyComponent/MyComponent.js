// CORE
import React, { Component } from 'react';
// SCSS
import './MyComponent.scss';
// LIBS
import Chance from 'chance';
// Components
import MyPureComponent from '../MyPureComponent/MyPureComponent';

const chance = new Chance();

class MyComponent extends Component {

	render() {

		return (
			<section className='MyComponent'>
				<MyPureComponent name={chance.name()}/>
			</section>
		);
	}
}

export default MyComponent;
