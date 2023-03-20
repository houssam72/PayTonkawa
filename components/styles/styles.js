import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "rgb(5,5,5)",
    // alignItems: "center",
    // justifyContent: "flex-end",
  },
});

export const textinput = StyleSheet.create({
  text: {
    fontSize: 19,
    paddingBottom: 7,
    marginRight: 6,
    fontWeight: "bold",
    color: "white",
  },
  etoile: {
    fontSize: 11,
    color: "#000000",
  },
  textView: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    marginLeft:"6%",
  },
  input: {
    marginLeft:"6%",
    width: "88%",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    borderWidth: 1,
    borderColor: "white",
    borderStyle: "solid",
    borderRadius: 6,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export const submitButton = StyleSheet.create({
  Button: {
    width:"88%",
    marginLeft:"6%",
    backgroundColor: "#000000",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  ButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
  },
});

export const LoginView = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: "5%",
  },
});
