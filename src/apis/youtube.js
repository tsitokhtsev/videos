import axios from 'axios'

const KEY = 'AIzaSyDKOdkXFir6sEmG1WyxtCgUOKjEngbkVPo'

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
})