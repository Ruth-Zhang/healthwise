import React from 'react'
import { SearchResult } from './SearchResult';
import { ScrollView, View } from 'react-native';

export const SearchResultsList=(props) => {
    return (
        <ScrollView>
          <View style={{paddingLeft:15, paddingRight: 15, display: 'flex', flexWrap: 'wrap', width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
            {props.results.map((result, id) => {
           return <SearchResult result={result} key={id}onSelect={props.onSelect}/>;
          })}
          </View>
        </ScrollView>
    );
  };