import React from 'react';

const WordList = ({ words }) => (
	<ul>
		{words.map((word) => (
			<li key={word.id}>
				<div>
					<h3>{word.name}</h3>
					<p>{word.definition}</p>
				</div>
			</li>
		))}
	</ul>
);

export default WordList;
