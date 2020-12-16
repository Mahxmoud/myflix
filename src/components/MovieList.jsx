import React from 'react';
import { Card } from 'react-bootstrap';
import AddMovie from './AddMovie'
import MovieCard from './MovieCard'
const MovieList = (props) => {
    return (
        <div className='cards'>
            {props.movies.map((movie, index) => (
                <MovieCard
                    movie={movie}
                    key={index}
                />
            ))}
            <Card style={{ width: '18rem', margin: '23px', backgroundColor: '#282C34' }} className='addMovie'>
                <AddMovie
                    setAppNewMovie={props.setAppNewMovie}
                    setFirstRender={props.setFirstRender}
                />
            </Card>
        </div>
    );
};

export default MovieList;