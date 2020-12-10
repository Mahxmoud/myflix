import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';
import SearchBox from './SearchBox';
const MovieListHeading = (props) => {
    const [rating, setRating] = useState(0)
    const [searchValue, setSearchValue] = useState('');
    const changeRating = (newRating) => {
        setRating(
            newRating
        );}
       
    
    return (
        <div className='row heading'>
            <h1>{props.heading}</h1>
            <SearchBox
                searchValue={searchValue}
                changeRating={changeSearch} />
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