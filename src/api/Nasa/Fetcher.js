import config from './config'

class Fecther {
	constructor(url = config.url, fetchOptions) {
		this.state = {
			fetchOptions: {
				...fetchOptions
			},
			url
		}
	}
	get() {
		const fetchOptions = {
			method: 'GET',
			...this.state.fetchOptions
		}

		return this.fetch(fetchOptions)
	}

	async fetch(options) {
		try {
			const response = await fetch(`${this.state.url}?api_key=${config.key}`, options)

			if (!response.ok) {
				throw(new Error(response.statusText))
			}

			return response.json()
		} catch(e) {
			throw(e);
		}
	}
}

export default new Fecther()
