import { Button, Card, Image, Text } from "@rneui/base";
import React, { useState } from "react";
import { StyleSheet, TouchableHighlight, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useSetSession } from "../../context/SessionProvider";
import { auth } from "../../helpers/fucntionAuth";


export const Login = () => {


  const [usuario, setUsuario] = useState();
  const [password, setPassword] = useState();
  const setSesion = useSetSession();

  const authLogin = async () => {
    try {
      const loguearse = await auth(usuario, password)

      setSesion(loguearse)

    } catch (error) {
      console.log(error);
    }
  
  }

  
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../../assets/IPF-logo.png') }
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Usuario"
          keyboardType="text"
          underlineColorAndroid="transparent"
          onChangeText={(e) => setUsuario(e)}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Contraseña"
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          onChangeText={(e) => setPassword(e)}
        />
      </View>

      <TouchableHighlight
        style={[styles.buttonContainer, styles.loginButton]}
        onPress={() => authLogin()}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DCDCDC",
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  logo: {
    width: 180,
    height: 180,
    marginLeft: 15,
    justifyContent: "center",
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: "white",
  },
});
