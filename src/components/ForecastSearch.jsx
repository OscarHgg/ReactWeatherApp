import React, {useRef} from 'react';
import {Button} from 'semantic-ui-react';

const ForecastSearch = ({search}) => {

    const searchValue = useRef();

    return(
        <>
        <label>Sök stad</label><br/>
        <input type="text" ref={searchValue}/><br/>
        <Button onClick={() => search(searchValue.current.value)}>Sök</Button>
        </>
    );
}

export default ForecastSearch;