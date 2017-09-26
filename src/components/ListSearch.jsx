import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions';


class ListSearch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: ''
		}
	}

	// componentDidMount() {
	// 	const BASE_URL = 'https://coinmap.org/api/v1/venues';
	// 	const FETCH_URL = `${BASE_URL}?query=${this.state.query}`;
	// 	this.props.dispatch()
	// }

	search() {
		console.log('this.state', this.state);
		const BASE_URL = 'https://coinmap.org/api/v1/venues';
		const FETCH_URL = `${BASE_URL}?query=${this.state.query}`;
		console.log('fetch url in list search', FETCH_URL);
		this.props.dispatch(getData(FETCH_URL));
	}

	render() {
		return (
			<div>
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
								this.props.venues.map((venue, index) => {
									return <div key={index}>
												<strong>{venue.category}</strong><em>{venue.name}</em>
											</div>
								})
							}
						</div>
					</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	if(state.venues.length > 0) {
		return {
			venues: state.venues
		}
	}
	else {
		return {
			venues: []
		}
	}
	// const { venues } = state;
	// return {
	// 	venues
	// }
}

export default connect(mapStateToProps)(ListSearch);
