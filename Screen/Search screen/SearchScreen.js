
import { useState } from "react";
import { View } from "react-native";
import { SearchBar } from './SearchBar';
import { SearchResultsList } from './SearchResultsList';
import { data } from "./data"
import { DiseaseInfoPage } from "./DiseaseInfoPage";
import { TouchableWithoutFeedback } from "react-native";
import { Keyboard } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView style={styles.app} className="App">
         <View style={styles.searchBarContainer} className="search-bar-container">
          <SearchBar setResults={filterResults} />
          <SearchResultsList results={results} onSelect={setDisease} />
         </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = {
  app: {
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
  }
  ,
  searchBarContainer: {
    paddingTop: "30vh",
    width: "100%",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minWidth: "250px",
  }
}