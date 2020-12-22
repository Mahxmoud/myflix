import React from 'react'
import { Link } from "react-router-dom";
function MovieDetails(props) {
    const movie = props.list[props.match.params.id]
    return (
        <div>
            <div className='row heading'>
                <h1>{movie.title}</h1>
                <Link to='/' style={{ color: '#fff', textDecoration: 'none' }} >
                    <p>Back</p>
                </Link>
            </div>
               
            <div className='movie-contents'>
                <iframe className='movei-trailer' style={{
                    width: '55%', height: '420px'
                }} src={movie.trailerUrl} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title='haroun'></iframe>
                <div className='movie-descrption'>{movie.description}</div>
            </div>
        </div>
    )
}

export default MovieDetails
