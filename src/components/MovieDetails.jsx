import React from 'react'

function MovieDetails(props) {
    const movie = props.list[props.match.params.id]
    return (
        <div>
            <div className='row heading'>
                <h1>{movie.title}</h1>
            </div>
            <div className='movie-content'>
                <iframe width="560" height="315" src={movie.trailerUrl} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title='movie'></iframe>
                <div>{movie.description}</div>
            </div>
        </div>
    )
}

export default MovieDetails
