import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "react-native-vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";


const Footer = () => {
    const route = useRoute();
    const { name } = route;
  const navigation = useNavigation();

    const handleLinkToHome = () => {
    navigation.navigate("Home");
  };

  const handleLinkToIncidents = () => {
    navigation.navigate("Incidents");
  };

  const handleLinkToReport = () => {
    navigation.navigate("Report");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.box, name==="Home" ? styles.borderTop : styles.box]} onPress={handleLinkToHome}>
        <Text style={styles.text}>
          <Ionicons name="home" size={24} color="#6f6c6c" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.box, name==="Report" ? styles.borderTop : styles.box]}>
        <Text style={styles.text} onPress={handleLinkToReport}>
          <FontAwesome name="signal" size={24} color="#6f6c6c" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.box, name==="Incidents" ? styles.borderTop : styles.box]} onPress={handleLinkToIncidents}>
        <Text style={styles.text}>
          <FontAwesome name="list-ul" size={24} color="#6f6c6c" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

 const styles = StyleSheet.create({
    container: {
      boxSizing: "border-box",
      width: "100%",
      paddingLeft: "10px",
      paddingRight: "10px",
      height: "fit-content",
      backgroundColor: "#fff",
      flexDirection: "row",
      justifyContent: "space-between",
    },

    box: {
      boxSizing: "border-box",
      width: "fit-content",
      padding: 10,
      height: "fit-content",
      alignItems: "center",
      justifyContent: "center",
     },
    
     borderTop: {
      borderTopColor: "red",
      borderTopWidth: 4,
    },

    text: {
      color: "#eee",
    },
  });


export default Footer;
