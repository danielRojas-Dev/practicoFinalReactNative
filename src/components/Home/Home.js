import React from "react";
import { Text } from "@rneui/base/dist/Text";
import { StyleSheet } from "react-native";
import { View } from "react-native";

import { useDataUser } from "../../context/SessionProvider";

export default function Home() {
  const user =  useDataUser()

  return (
    <View style={styles.container}>
  <Text style={styles.text}>¡Bienvenido {user?.apellido} {user?.nombre}!</Text>

  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#DCDCDC",
  },
  text:{
    fontSize:30,
    textAlign:"center",
  },
})
