import fetch from 'cross-fetch';

import config from './config';

const URL = config.PREFIX;

export default {
	login: data => {
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		};

		return fetch(URL + 'login/', options);
	},
    
	signup: data => {
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		};
        
		return fetch(URL + 'signup/', options);
	},

	getUser: token => {
		const options = {
			method: 'GET',
			headers: {
				'Authorization': `Token ${token}`
			}
		};
        
		return fetch(URL + 'verify/', options);
	}
};