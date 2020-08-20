import React from 'react'

export default function Searchbar(props) {
    const { searchText, handleSearch, handleFetch, articleStatus  } = props;
    return (
        <div>
            <input type="text" value={searchText} onChange={ e => handleSearch(e.target.value) }/>
            <button onClick={handleFetch} disabled={articleStatus === 'LOADING'}>Fetch</button>
        </div>
    )
}
