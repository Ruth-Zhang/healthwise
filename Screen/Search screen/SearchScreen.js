
import { useState } from "react";
import { View } from "react-native";
import { SearchBar } from './SearchBar';
import { SearchResultsList } from './SearchResultsList';
import { data } from "./data"
import { DiseaseInfoPage } from "./DiseaseInfoPage";

export default function SearchScreen() {
  const [results, setResults] = useState(data);
  const filterResults = (searchText) => {
    const filteredResults = data.filter((d) => d.heading.toLowerCase().includes(searchText.toLowerCase()))
    setResults(filteredResults)
  }

  const [Disease, setDisease] = useState();
  if (Disease) {
    return <DiseaseInfoPage diseaseInfo={Disease} goBack={() => setDisease(undefined)} />
  } else {

    return (
      <View style={styles.app} className="App">
        <View style={styles.searchBarContainer} className="search-bar-container">
          <SearchBar setResults={filterResults} />
          <SearchResultsList results={results} onSelect={setDisease} />
        </View>
      </View>
    );
  }
}
const styles = {
  app: {
    backgroundColor: "#eee",
    height: "100vh",
    width: "100vw",
  }
  ,
  searchBarContainer: {
    paddingTop: "30vh",
    width: "40%",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minWidth: "250px",
  }
}