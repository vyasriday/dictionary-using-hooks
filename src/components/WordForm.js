import React, { useState } from 'react';

const WordForm = (props) => {
	const [word, setWord] = useState({
		name: '',
		definition: '',
	});

	function handleWord(e) {
		const { name, value } = e.target;
		setWord({ ...word, [name]: value.toLowerCase() });
	}

	function handleSubmit(e) {
		e.preventDefault();
		props.handleSubmit(word);
		setWord({ name: '', definition: '' });
	}
	return (
		<form onSubmit={handleSubmit}>
			<label>
				Name
				<input
					name='name'
					type='text'
					value={word.name}
					onChange={handleWord}
				/>
			</label>
			<label>
				Definition
				<input
					name='definition'
					type='text'
					value={word.definition}
					onChange={handleWord}
				/>
			</label>
			<button type='submit'>Submit</button>
		</form>
	);
};

export default WordForm;
