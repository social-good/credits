import React, { Component } from 'react';

import Closeup0 from '../closeups/Closeup0.js.jsx'
import Closeup1 from '../closeups/Closeup1.js.jsx'
import Closeup2 from '../closeups/Closeup2.js.jsx'
import Closeup3 from '../closeups/Closeup3.js.jsx'

export default class FeedCloseup extends Component {

	render() {
		var closeup;

		switch (parseInt(this.props.match.params.feedId)) {
			case 0: 
				closeup = <Closeup0 />
				break;
			case 1: 
				closeup = <Closeup1 />
				break;
			case 2: 
				closeup = <Closeup2 />
				break;
			case 3:
				closeup = <Closeup3 />
		}

		return (
			<div className="FeedCloseup" >
				{closeup}
			</div>
		);
	}
}

