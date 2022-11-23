import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 100,
  },

  check: {
    flexDirection: "row",
    left: 350,
    marginTop: -40,
  },
  task: {
    fontSize: 20,
    marginTop: 5,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#1DD5B1",
    padding: 10,
    margin: 12,
    width: "95%",
    marginTop: 2,
  },
  title: {
    fontSize: 30,
  },
  text: { fontSize: 20 },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
