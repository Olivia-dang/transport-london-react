import { API_URL , APP_ID, API_KEY} from './auth'

export async function getBikePoints() {
	const url = `${API_URL}/BikePoint`
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'app_id': APP_ID,
            'app_key': API_KEY
        },
    })
    if (response.ok) {
        return response.json()
    } else {
        return Promise.reject('Unable to retrive bike points')
    }
}

export async function getBikePoint(id) {
	const url = `${API_URL}/BikePoint/${id}`
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'app_id': APP_ID,
            'app_key': API_KEY
        },
    })
    if (response.ok) {
        return response.json()
    } else {
        return Promise.reject(`Unable to retrive bike point id ${id}`)
    }
}