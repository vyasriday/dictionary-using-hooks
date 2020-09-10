import http from './http';

const baseUrl = 'http://localhost:3001';

const getAll = () => http.get({ url: `${baseUrl}/words` });

const postWord = (word) => http.post({ url: `${baseUrl}/words`, body: word });

const updateWord = (id, word) =>
	http.put({ url: `${baseUrl}/words/${id}`, body: word });

export default {
	getAll,
	postWord,
	updateWord,
};
