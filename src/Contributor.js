import React, { Component } from 'react';

class Contributor extends Component {
	render() {
		const { name, username, access } = this.props;
		return(
			<div className="contributors">
				<div>Name: { name }</div>
				<div>Username: { username }</div>
				<div>Access Level: { access }</div>
			</div>
		);
	}
}

export default Contributor;