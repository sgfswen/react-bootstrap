// CORE
import React from 'react';
// SCSS
import './MyPureComponent.scss';
// LIBS

const MyPureComponent = (props) => {
	return (
		<article className='MyPureComponent'>
			Hi {props.name}
		</article>
	);
};

export default MyPureComponent;
