import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/screens/Home";
import MyCart from "./components/screens/MyCart";
import ProductInfo from "./components/screens/ProductInfo";
import axios from "axios";
import LoginRegister from "./components/screens/LoginRegister";
import Profile from "./components/screens/Profile";

export default function App() {
  const Stack = createNativeStackNavigator();

  const Fetch = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      username: "username923811117474588t7",
      firstName: "firstname",
      lastName: "laastname",
      email: "mail923811174587474774748523@yopmail.com",
      postalCode: "12345",
      companyName: "EPSI",
      city: "city",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    // try {
    //   const response = await fetch(
    //     "http://localhost:8081/api/auth/register",
    //     requestOptions
    //   );
    //   console.log("res", response);
    // } catch (error) {
    //   console.error("error", error);
    // } finally {
    //   console.log("Final");
    // }
    await axios
      .post("http:8081/api/auth/register", raw, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => console.log("res", res))
      .catch((err) => console.log("Err", err));
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="LoginRegister" component={LoginRegister} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MyCart" component={MyCart} />
        <Stack.Screen name="ProductInfo" component={ProductInfo} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
