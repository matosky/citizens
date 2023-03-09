import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";


import Footer from "../components/footer";
import Icon from "react-native-vector-icons/FontAwesome";

const Home = () => {

  const navigation = useNavigation();

  const handleLinkToReport = () => {
  navigation.navigate('Report');
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Hello!</Text>
      </View>
      <View style={styles.center}>
        <Text style={styles.centerTextTop}>Emergency report needed?</Text>
        <Text style={styles.centerTextSmall}>
          Just hold the button to report
        </Text>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleLinkToReport}
          >
            <Icon name="info-circle" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
    </View>
  );

};


  const styles = StyleSheet.create({
    container: {
      height: "100%",
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-between",
      color: "#fff",
      backgroundColor: "#e4f6f8",
    },
    center: {
      width: "100%",
      maxWidth: "100%",
      alignItems: "center",
      justifyContent: "Center",
    },
    centerTextTop: {
      fontSize: "32px",
      color: "#000",
      marginBottom: "10px",
      maxWidth: "80%",
      textAlign: "center",
    },
    centerTextSmall: {
      opacity: "0.7",
      fontSize: "16px",
    },
    row: {
      marginBottom: "20px",
      marginTop: "20px",
      width: "100%",
      maxWidth: "100%",
      alignItems: "Center",
      justifyContent: "center",
    },
    button: {
      borderRadius: "50%",
      backgroundColor: "red",
      height: "200px",
      width: "200px",
      borderWidth: 6,
      borderColor: "#7d7e7ef8",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 5,
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    },
    buttonImage: {
      width: "300px",
      height: "300px",
    },
    buttonText: {
      color: "#fff",
      fontSize: 16,
    },
    header: {
      width: "100%",
      height: "10%",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 10,
    },
    headerText: {
      color: "#000",
      fontSize: 16,
      textAlign: "center",
    },
  });



export default Home;
