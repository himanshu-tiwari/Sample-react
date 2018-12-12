import React from 'react';

const Contributors = ({ contributors }) => {
	const contributorList = contributors.map(contributor => {
		return (
			<div className="contributor" key={ contributor.id }>
				<div>Name: { contributor.name }</div>
				<div>Username: { contributor.username }</div>
				<div>Access Level: { contributor.access }</div>
			</div>
		);
	});
	
	return(
		<div className="contributor-list">
			{ contributorList }
		</div>
	);
}

export default Contributors;