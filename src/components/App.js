import React, { useState, useEffect } from 'react';
import wordsService from '../services/words';

import WordList from './WordList';

const App = (props) => {
	const [words, setWords] = useState([]);
	useEffect(() => {
		wordsService.getAll().then((words) => setWords(words));
	}, []);
	return (
		<div className='main-wrapper'>
			<h2>Word Wiki</h2>
			<WordList words={words} />
		</div>
	);
};

export default App;
