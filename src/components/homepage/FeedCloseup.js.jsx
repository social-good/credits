import React, { Component } from 'react';

export default class FeedCloseup extends Component {

	render() {
		return (
			<div className="FeedCloseup" >
				{this.props.match.params.feedId}
			</div>
		);
	}
}

