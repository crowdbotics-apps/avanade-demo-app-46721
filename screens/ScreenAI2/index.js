javascript;
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.keyboardView}>
        <View style={styles.logoContainer}>
          <Image source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} style={styles.logo} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
          <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    <View style={styles.WIwNIpwP}></View></SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4e55f9"
  },
  keyboardView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logoContainer: {
    marginBottom: 60
  },
  logo: {
    width: 100,
    height: 100
  },
  inputContainer: {
    width: "80%"
  },
  input: {
    backgroundColor: "#a8a1d0",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
    fontSize: 16
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 5,
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 16
  },
  WIwNIpwP: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777",
    flexDirection: "row",
    flex: 1,
    alignItems: "stretch"
  }
});
export default LoginScreen;