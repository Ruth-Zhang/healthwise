import React from "react";

export const SearchResult = ({result,onSelect}) => {
    return (
    <div style={styles.searchResults}
      className="search-result"
        onClick={(e) => onSelect(result)}
        >
        {result.heading}
    </div>
    );
};

const styles={
    searchResults:{
        fontFamily: "Arial"

    }
}