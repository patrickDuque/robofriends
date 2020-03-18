import React, { Component } from 'react';

import CardList from '../components/CardList';
import SeachBox from '../components/Seachbox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots      : [],
			searchfield : ''
		};
	}
	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	};

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => {
				return response.json();
			})
			.then((users) => {
				return this.setState({ robots: users });
			});
	}

	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter((robot) => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		});
		return robots.length === 0 ? (
			<h1 className='tc'>Loading</h1>
		) : (
			<div className='tc'>
				<h1>Robofriends</h1>
				<SeachBox searchChange={this.onSearchChange} />
				<Scroll>
					<CardList robots={filteredRobots} />
				</Scroll>
			</div>
		);
	}
}

export default App;
