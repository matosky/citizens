import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import FindIncident from "./search";

const IncidentsList = () => {
  const [incidents, setIncidents] = useState([]);
  const [loading, setIsloading] = useState(false);
    const [findIncidentFocus, setFindIncidentFocus] = useState(false);
    
  useEffect(() => {
    console.log(findIncidentFocus)
    const fetchData = async () => {
      setIsloading(true);
      try {
        const res = await axios.get(
          "https://flash-api-production.up.railway.app/api/incidents"
        );
        if (res) {
          setIsloading(false);
          setIncidents(res.data.data);
        }
      } catch (err) {
        setIsloading(false);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.type}>{item.type}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.location}>Location: {item.location}</Text>
    </View>
  );

  return (
    <View>
      <View style={{ height: 50, backgroundColor: '#fff', marginBottom:20 }}>
        <View style={styles.search}>
          <FindIncident
             onFocus={() => setFindIncidentFocus(true)}
              onBlur={() => setFindIncidentFocus(false)}
          />
        </View>
        {loading && (
          <View style={styles.errorDiv}>
            <Text style={styles.error}>loading...</Text>
          </View>
        )}
      </View>

      {!findIncidentFocus ? <View>
        <FlatList
          data={incidents}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
          style={styles.list}
        />
      </View>
        : null
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: "100%",
    width: "100%",
    zIndex: 5,
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
  },
  search: {
    position: "relative",
    width: "100%",
    borderRadius: 8,
    marginHorizontal: 16,
    alignSelf: "center",
    flexDirection: "row",
    marginVertical: 16,
    paddingHorizontal: 4,
    elevation: 5,
  },
  list: {
    flex: 1,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginBottom: "20px",
    borderRadius: 5,
  },
  type: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  error: {
    color: "#000",
  },
  errorDiv: {
    width: "fit-content",
    paddingTop: 8,
    paddingBottom: 8,
    textAlign: "center",
    marginBottom: 0,
    marginTop: 0,
    marginLeft: "auto",
    marginRight: "auto",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    borderRadius: 5,
    marginBottom: 10,
  },
  location: {
    fontSize: 16,
    fontStyle: "italic",
  },
});

export default IncidentsList;
