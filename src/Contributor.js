import React, { Component } from 'react';

class Contributor extends Component {
	render() {
		return(
			<div className="contributors">
				<div>Name: { this.props.name }</div>
				<div>Username: { this.props.username }</div>
				<div>Access Level: { this.props.access }</div>
			</div>
		);
	}
}

export default Contributor;