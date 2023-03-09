import axios from "axios";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

const ReportForm = ()=>{

  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setIsloading] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!location || !description || !type) {
      setError("all fields required");
      setTimeout(() => {
        setError("")
      },3000)
      return;
    }
    const data = { type:type, description:description, location:location }
    setIsloading(true);
    try {
      const result = await axios.post("http://localhost:8080/api/incidents",JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json"
        },
      })

      
      if (result.data.status === "success") {
        console.log(result)
        setSuccess("Report sent successfully")
        setTimeout(() => {
        setSuccess("");
      },3000)
      setIsloading(false);
      setTimeout(() => {
        setError("")
      },3000)
    }
    } catch (err) {
      setIsloading(false);
      setError("Invalid details")
      setTimeout(() => {
        setError("");
      },3000)
    }

    setDescription("");
    setLocation("");
    setType("");
  }
  

  return (
    <View style={styles.container}>
      {success ? <View style={styles.successDiv}><Text style={styles.success}>{ success }</Text></View> : <View><Text></Text></View>}
      <Text style={styles.label}>Incident Type:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setType}
        value={type}
        placeholder="Enter incident type"
      />
      <Text style={styles.label}>Street Address:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setLocation}
        value={location}
        placeholder="Enter Location"
      />
      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={[styles.input, styles.multiline]}
        onChangeText={setDescription}
        value={description}
        placeholder="Enter description"
        multiline={true}
      />
      {error ? <View style={styles.errorDiv}><Text style={styles.error}>{ error }</Text></View> : <View><Text></Text></View>}

      <TouchableOpacity style={styles.button} onPress={handleSubmit} >
        {loading ? <Text style={styles.buttonText2}>loading...</Text> : <Text style={styles.buttonText}>Submit Report</Text>}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  multiline: {
    height: 100,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  error: {
    color: "#fff"
  },
  errorDiv: {
    width: "100%",
    paddingTop: 8,
    paddingBottom: 8,
    textAlign: "center",
    backgroundColor: "red",
    marginBottom: 5,
  },
   success: {
    color: "#fff"
  },
    successDiv: {
    width: "100%",
    paddingTop: 8,
    paddingBottom: 8,
    textAlign: "center",
    backgroundColor: "green",
    marginBottom: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    cursor: "pointer"
  },
    buttonText2: {
    color: "#fff",
    fontSize: 18,
      textAlign: "center",
      opacity: 0.5,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    borderRadius: 5,
    marginBottom: 20,
  },
});

export default ReportForm;
