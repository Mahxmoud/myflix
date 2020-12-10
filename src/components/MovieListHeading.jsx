import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';

const MovieListHeading = (props) => {
    const [rating, setRating] = useState(0)
      const  changeRating = (newRating) => {
            setRating(
                newRating
            );
        }
        return (
            <div className='col'>
                <h1>{props.heading}</h1>
                <StarRatings
                    rating={rating}
                    starRatedColor="yellow"
                    changeRating={changeRating}
                    numberOfStars={5}
                    name='rating'
                />
            </div>
        );
    };

    export default MovieListHeading;