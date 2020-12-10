
import React from 'react';
import { Button, Card } from 'react-bootstrap';

const MovieList = (props) => {
    return (
        <div className='cards'>
            {props.movies.map((movie, index) => (
                <Card style={{ width: '18rem', margin: '23px', backgroundColor: '#282C34' }} >
                    <Card.Img variant="top" src={movie.posterUrl} alt='' style={{ height: '30%' }} />
                    <Card.Body>
                        <Card.Title className='title'>{movie.title}</Card.Title>
                        <Card.Text className='description'>
                            {movie.description}
                        </Card.Text>
                        <Button variant="primary" >Watch now</Button>
                    </Card.Body>
                </Card>
            ))}
            <Card style={{ width: '18rem', margin: '23px' , backgroundColor: '#282C34' }} className='addMovie'>
                <Button variant="primary" className='plus' >+</Button>
            </Card>
        </div>
    );
};

export default MovieList;