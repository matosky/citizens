import { View, FlatList, Text, StyleSheet } from "react-native";

const SearchDisplay = ({ results }) => {
  console.log("results", results);
  // const [data, set]

  const renderItem = ({ item }) => (
    <View>
      <Text style={{color:"#000"}}>Money</Text>
      <Text>{item.description}</Text>
      <Text>Location: {item.location}</Text>
    </View>
  );
  return (
    <View >
      <FlatList
        data={results}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
//   list: {
//         flex: 1,
//       color:"#fff"
//   },
//   item: {
//     backgroundColor: "#f9c2ff",
//     padding: 20,
//     marginBottom: "20px",
//       borderRadius: 5,
//     color:"#000",
//   },
//   type: {
//     fontSize: 20,
//     fontWeight: "bold",
//       marginBottom: 5,
//       color: "#000",
//     borderWidth: 3
//   },
//   description: {
//     fontSize: 16,
//     marginBottom: 10,
//       color: "#000",
//     borderWidth: 3
//   },
 
//   location: {
//     fontSize: 16,
//     fontStyle: "italic",
//   },
});

export default SearchDisplay;
