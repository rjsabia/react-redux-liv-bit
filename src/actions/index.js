import { RECIEVE_VENUES } from '../constants';

const recieveVenues = (venues) => ({
	type: RECIEVE_VENUES,
	venues
})

export const getData = (url) => {
	console.log('url', url);
	return (dispatch, url) => {
		console.log('url in return', url);
		fetch(url)
		.then(response => response.json())
		.then(json => dispatch(recieveVenues(json.venues)))
		.catch((err) => console.log('error recieving data', err))
	}
}


