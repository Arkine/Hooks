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

	getByDate(date) {
		const fetchOptions = {
			method: 'GET',
			...this.state.fetchOptions
		}

		return this.fetch(fetchOptions, {date})
	}

	get() {
		const fetchOptions = {
			method: 'GET',
			...this.state.fetchOptions
		}

		return this.fetch(fetchOptions)
	}

	async fetch(options, query = {}) {
		let url = `${this.state.url}?api_key=${config.key}`

		for (const key in query) {
			const data = encodeURI(query[key]);

			url += `&${key}=${data}`
		}

		try {
			const response = await fetch(url, options)
			if (!response.ok) {
				throw(new Error(response.statusText))
			}

			if (response.statusCode >= 400) {
				throw new Error('There was an error getting images...')
			}

			return response.json()
		} catch(e) {
			throw(e);
		}
	}
}

export default new Fecther()
