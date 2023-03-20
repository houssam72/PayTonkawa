import { useState } from "react";
import { TouchableOpacity } from "react-native";
import {
  TouchableWithoutFeedback,
  ImageBackground,
  View,
  Keyboard,
  Text,
} from "react-native";
import { globalStyles } from "../styles/styles";
import { Login } from "../TheLogin/Login";
import { Register } from "../TheLogin/Register";
import { WaveThingy } from "../TheLogin/WaveThingy";

export default function LoginRegister({ navigation }) {
  const [LoginComponent, Setlogin] = useState(true);
  const image = { uri: "https://reactjs.org/logo-og.png" };
  return (
    <ImageBackground
      source={require("../../assets/fonts/bg4.jpeg")}
      style={{
        width: "100%",
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={globalStyles.container}>
          <WaveThingy />
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "white",
              borderStyle: "solid",
              borderRadius: 6,
              width: "32%",
              padding: "1%",
              position: "absolute",
              top: "8%",
              left: "62%",
            }}
            onPress={() => {
              Setlogin(!LoginComponent);
            }}
          >
            <Text
              style={{
                fontSize: 17,
                paddingTop: 5,
                paddingBottom: 5,
                fontWeight: "bold",
                color: "white",
                textAlign: "center",
              }}
            >
              {LoginComponent ? "S'inscrire" : "Se connecter"}
            </Text>
          </TouchableOpacity>
          {LoginComponent ? (
            <Login onPress={() => navigation.navigate("Home")} />
          ) : (
            <Register
              OnLoginPage={() => {
                Setlogin(true);
              }}
            />
          )}
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
}
