import React, { useState, useEffect } from 'react';
import wordsService from '../services/words';

import WordList from './WordList';
import WordForm from './WordForm';

import { checkIfWordExists } from '../helpers';

const App = (props) => {
	const [words, setWords] = useState([]);
	const [showForm, setShowForm] = useState(false);

	useEffect(() => {
		wordsService.getAll().then((words) => setWords(words));
	}, []);

	function handleSubmit(word) {
		if (!checkIfWordExists(words, word.name)) {
			wordsService.post(word).then((word) => setWords([...words, word]));
		} else {
			alert(`${word.name} already exists in the wiki!`);
		}
	}

	return (
		<div className='main-wrapper'>
			<h2>Word Wiki</h2>
			<div>
				<button onClick={() => setShowForm(!showForm)}>
					{showForm ? 'Close' : 'Add Word'}
				</button>
			</div>

			{showForm && <WordForm handleSubmit={handleSubmit} />}
			<WordList words={words} />
		</div>
	);
};

export default App;
