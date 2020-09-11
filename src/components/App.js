import React, { useState, useEffect } from 'react';
import wordsService from '../services/words';

import WordList from './WordList';
import WordForm from './WordForm';

import { checkIfWordExists } from '../helpers';

const App = (props) => {
	const [words, setWords] = useState([]);
	const [showForm, setShowForm] = useState(false);
	const [filter, setFilter] = useState('');
	const [filteredWords, setFilteredWords] = useState(words);
	useEffect(() => {
		wordsService.getAll().then((words) => {
			setWords(words);
		});
	}, []);

	useEffect(() => {
		setFilteredWords(words.filter((word) => word.name.startsWith(filter)));
	}, [filter, words]);
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
				<input
					type='search'
					value={filter}
					onChange={(e) => setFilter(e.target.value)}
					placeholder='Search for words'
				/>
			</div>

			{filter && <WordList words={filteredWords} />}
			{!filter && <WordList words={words} />}
			{showForm && <WordForm handleSubmit={handleSubmit} />}
			<div>
				<button onClick={() => setShowForm(!showForm)}>
					{showForm ? 'Close' : 'Add Word'}
				</button>
			</div>
		</div>
	);
};

export default App;
