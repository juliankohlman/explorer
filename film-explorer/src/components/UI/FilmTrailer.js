import React from 'react';
//TODO must configure cors() to deal with youtube issues

const FilmTrailer = props => {
	// * Need to handle the abscence of trailers gracefully in terms of UI-UX
	const videos = props.videos;
	return (
		videos
			.map(video => {
				return (
					<iframe
						title={video.name}
						key={video.id}
						src={`//www.youtube.com/embed/${video.key}`}
						alt={video.type}
						className="trailerVideo"
					/>
				);
			})
			.slice(0, 2) || []
	);
};

export default FilmTrailer;
