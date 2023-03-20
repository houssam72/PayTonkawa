import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { LoginView, submitButton, textinput } from "../styles/styles";
import InputText from "./InputTextComponent/InputText";
import axios from "axios";

export const Login = ({onPress}) => {
  const [value, setValue] = useState("");

  return (
    <View style={LoginView.container}>
      <InputText
        name="Email"
        placeHolder={"Entrez votre adresse e-mail"}
        value={value}
        setValue={setValue}
        required
      />
      <TouchableOpacity
        // onPress={() => {
        //   var myHeaders = new Headers();
        //   myHeaders.append("Content-Type", "application/json");

        //   var raw = JSON.stringify({
        //     username: "username9238111119",
        //     firstName: "firstname",
        //     lastName: "laastname",
        //     email: "mail9238111119@yopmail.com",
        //     postalCode: "12345",
        //     companyName: "EPSI",
        //     city: "city",
        //   });

        //   var requestOptions = {
        //     method: "POST",
        //     headers: myHeaders,
        //     body: raw,
        //     redirect: "follow",
        //   };

        //   fetch("http://localhost:8081/api/auth/register", requestOptions)
        //     .then((response) => response.text())
        //     .then((result) => console.log(result))
        //     .catch((error) => console.log("error", error));
          
        // }}
        onPress={()=>{onPress()}}
      >
        <View style={submitButton.Button}>
          <Text style={submitButton.ButtonText}>Se connecter</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
