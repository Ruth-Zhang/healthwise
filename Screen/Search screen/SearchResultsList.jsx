import React from 'react'
import { SearchResult } from './SearchResult';
export const SearchResultsList=(props) => {
    return (
        <div className="results-list">
            {props.results.map((result, id) => {
           return <SearchResult result={result} key={id}onSelect={props.onSelect}/>;
       })}
        </div>
    );
  };