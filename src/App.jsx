import React, { Component } from 'react';
// import Results from './components.Results';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lat1: '',
			lon1: '',
			lat2: '',
			lon2: '',
			query: '',
			category: '',
			results: [
				{
					category: '',
					name: ''
				}
			]
		}
	}

	search() {
		console.log('this.state', this.state);
		const BASE_URL = 'https://coinmap.org/api/v1/venues';
		const FETCH_URL = `${BASE_URL}?query=${this.state.query}`;
		fetch(FETCH_URL, {
			method: 'GET'
		})
		.then(response => response.json())
		.then(json => {
			const result = json.venues;
			result.map(result => {
				this.setState({results: {category: result.category, name: result.name}});
				// this.setState({name: result.name, category: result.category});
				// return console.log('new state results', this.state.results)
				return this.state.results;
			})
			// console.log('search results', result);
			// console.log('search results mapped', result.map(result => result.name));
		})
	}

	render() {
		return(
			<div className="App">
				<h1>Bitcoin vendor search</h1>
					<input
						placeholder="Enter a category..."
						value={this.state.query}
						onChange={event => {this.setState({query: event.target.value})}}
						onKeyPress={event => {
							if (event.key === 'Enter') {
								this.search()
							}
						}}
					/>
					<button
						onClick={() => this.search()}
					>
						Search
					</button>
					<div>
						<h2>Search Results</h2>
						<div>
							{
								console.log('this.state.results', this.state.results)
								// const showResults = this.state.results;
								// this.state.results.map((results, index) => {
								// 	const { category, name } = result;
								// 	return <div key={index}><strong>{results.category}</strong></div>
								// })
							}
						</div>
					</div>
			</div>
		)
	}
}

export default App;