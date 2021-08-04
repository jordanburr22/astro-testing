import React from 'react';
const Menu = ({ ideas }) => {
	return (
		<ul>
			{ideas.map((idea) => (
				<li>{idea}</li>
			))}
		</ul>
	);
};

export default Menu;
