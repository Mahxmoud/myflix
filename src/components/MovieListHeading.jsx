import React, { useState, useEffect} from 'react';
import StarRatings from 'react-star-ratings';
import SearchBox from './SearchBox';
const MovieListHeading = (props) => {
    // Rating Function
    const [rating, setRating] = useState(0)
    const changeRating = (newRating) => {
        setRating(
            newRating
        )
    }
    // Search Function
    const [searchValue, setSearchValue] = useState('');
    useEffect(() => {
        var newSearchedMovies = props.list.filter(result => result.title.toUpperCase().includes(searchValue.toUpperCase()) && result.rate >= rating)
        props.setMovies(newSearchedMovies)
    },[searchValue, rating])

    return (
        <div className='row heading'> 
            <h1>{props.heading}</h1>
            <SearchBox
                searchValue={searchValue}
                setSearchValue={setSearchValue} />
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