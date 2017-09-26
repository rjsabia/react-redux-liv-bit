import React, { Component } from 'react';
import ListSearch from './components/ListSearch';
import './App.css';

class App extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		lat1: '',
	// 		lon1: '',
	// 		lat2: '',
	// 		lon2: '',
	// 		query: '',
	// 		category: '',
	// 		venues: []
	// 	}
	// }

	// search() {
	// 	console.log('this.state', this.state);
	// 	const BASE_URL = 'https://coinmap.org/api/v1/venues';
	// 	const FETCH_URL = `${BASE_URL}?query=${this.state.query}`;
	// 	fetch(FETCH_URL, {
	// 		method: 'GET'
	// 	})
	// 	.then(response => response.json())
	// 	.then(json => {
	// 		this.setState({
	// 			venues: json.venues
	// 		})
	// 		const result = json.venues;
	// 		result.map(result => {
	// 			this.setState({results: {category: result.category, name: result.name}});
	// 			this.setState({name: result.name, category: result.category});
	// 			return console.log('new state results', this.state.results)
	// 			return this.state.results;
	// 		})
	// 		console.log('search results', result);
	// 		console.log('search results mapped', result.map(result => result.name));
	// 	})
	// }

	render() {
		return(
			<div className="App">
				<ListSearch />
			</div>
		)
	}
}

export default App;