import React, { Component } from 'react';
import Tree from 'react-d3-tree';

import '../../stylesheets/Crew.css'

export default class CrewOnomasticTree extends Component {

	render() {
		const myTreeData = [
		  {
			name: 'Natalie Portman',
			attributes: {
			  keyA: 'val A',
			  keyB: 'val B',
			  keyC: 'val C',
			},
			children: [
			  {
				name: 'Natalie',
				attributes: {
				  keyA: 'val D',
				  keyB: 'val E',
				  keyC: 'val F',
				},
			  },
			  {
				name: 'Portman',
				attributes: {
				  keyA: 'val D',
				  keyB: 'val E',
				  keyC: 'val F',
				},
			  },
			  {
				name: 'Natalie Herschlag',
				attributes: {
				  keyA: 'val D',
				  keyB: 'val E',
				  keyC: 'val F',
				},
					children: [
				  {
					name: 'Natalie',
					attributes: {
					  keyA: 'val D',
					  keyB: 'val E',
					  keyC: 'val F',
					},
				  },
				  {
					name: 'Herschlag',
					attributes: {
					  keyA: 'val D',
					  keyB: 'val E',
					  keyC: 'val F',
					},
				  }
				],
			  }
			],
		  },
		];

		const translate = {
			x: 100,
			y: 250
		}

		return (
			<div className="CrewOnomasticTree" >
				<Tree data={myTreeData} onClick={this.props.handleClick} zoomable={false} translate={translate} />
			</div>
		);
	}
}

