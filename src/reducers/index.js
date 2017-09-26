import { RECIEVE_VENUES } from '../constants';

const initialState = { venues: [] };

export default (state = initialState, action) => {
	switch(action.type) {
		case RECIEVE_VENUES: 
		return {
			...state,
			venues: action.venues
		};
	default:
		return state;
	}
}