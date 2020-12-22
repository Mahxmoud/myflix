import React from 'react'
import { Button, Card } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
    return (
        <>
            <Link to={movie.title} style={{ color: '#fff', textDecoration: 'none' }}>
                <Card style={{ width: '18rem', margin: '23px', backgroundColor: '#282C34', height: '60%' }}>
                    <Card.Img variant="top" src={movie.posterUrl} alt='' style={{ height: '30%' }} />
                    <Card.Body>
                        <Card.Title className='title'>{movie.title}</Card.Title>
                        <Card.Text className='description'>
                            {movie.description}
                        </Card.Text>
                        <StarRatings className='movie-rate'
                            rating={movie.rate}
                            starRatedColor="yellow"
                            numberOfStars={5}
                            starDimension='25px'
                            starSpacing='0'
                            name='rating'
                        /> <br />
                        <Button className='mt-5' variant="warning" >Watch now</Button>
                    </Card.Body>
                </Card>
            </Link>
        </>
    )
}

export default MovieCard