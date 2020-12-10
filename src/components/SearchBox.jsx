import React from 'react';
import { Form } from 'react-bootstrap'
const SearchBox = (props) => {
    return (<div className='col col-sm-4'>
        <Form.Control
            value={props.value}
            onChange={(event) => props.setSearchValue(event.target.value)}
            type="text"
            placeholder="Type to search..." />
    </div>
    );
};

export default SearchBox;