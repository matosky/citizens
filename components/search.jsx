import axios from "axios";
import { useState } from "react";
import { TextInput, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import SearchDisplay from "./searchDisplay";

const FindIncident = ({ onFocus, onBlur }) => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchIncidentsByType = async (searchText) => {
    if (searchText.length < 3) {
      setSearchResults([]);
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:8080/api/incidents/${searchText}`
      );
      if (response) {
        setSearchResults(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
    searchIncidentsByType(searchText);
  };

  return (
    <View style={{ width: "100%" }}>
      <View>
        <TextInput
          onFocus={onFocus}
          onBlur={onBlur}
          style={styles.searchInput}
          placeholder="Search incident by type"
          placeholderTextColor="#B0B0B0"
          onChange={handleSearchTextChange}
        />
      </View>
      <View style={{ flexDirection: "column", width:"100%", height: "100%", borderWidth:4, marginTop:50 }}>
        <SearchDisplay  results={searchResults} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    fontSize: 16,
    color: "#333333",
    width: "100%",
    height: "100%",
    paddingTop: 10,
    paddingBottom: 10,
  },
  button: {
    height: "100%",
    width: "fit-content",
    padding: 10,
    borderWidth: 2,
    borderColor: "#000",
    backgroundColor: "#000",
  },
});

export default FindIncident;
