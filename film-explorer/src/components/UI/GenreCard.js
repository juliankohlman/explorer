import React from 'react';

const GenreCard = props => {
	return (
		// <div className="fl w-100 w-50-m w-25-l bg-black-10 tc pv4 red">
		<div className="genreCard">{props.genre}</div>
	);
};

export default GenreCard;
