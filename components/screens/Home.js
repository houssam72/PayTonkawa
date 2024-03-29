import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { COLOURS, Items } from "../database/Database";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Home = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [accessory, setAccessory] = useState([]);

  //get called on screen loads
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  //get data from DB

  const getDataFromDB = () => {
    let productList = [];
    let accessoryList = [];
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].category == "product") {
        productList.push(Items[index]);
      } else if (Items[index].category == "accessory") {
        accessoryList.push(Items[index]);
      }
    }

    setProducts(productList);
    setAccessory(accessoryList);
  };

  //create an product reusable card

  const ProductCard = ({ data }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ProductInfo", { productID: data.id })
        }
        style={{
          width: "48%",
          marginVertical: 14,
        }}
      >
        <View
          style={{
            width: "100%",
            height: 100,
            borderRadius: 10,
            backgroundColor: COLOURS.backgroundLight,
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          {data.isOff ? (
            <View
              style={{
                position: "absolute",
                width: "20%",
                height: "24%",
                backgroundColor: COLOURS.green,
                top: 0,
                left: 0,
                borderTopLeftRadius: 10,
                borderBottomRightRadius: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: COLOURS.white,
                  fontWeight: "bold",
                  letterSpacing: 1,
                }}
              >
                {data.offPercentage}%
              </Text>
            </View>
          ) : null}
          <Image
            source={data.productImage}
            style={{
              width: "80%",
              height: "80%",
              resizeMode: "contain",
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 12,
            color: COLOURS.white,
            fontWeight: "600",
            marginBottom: 2,
          }}
        >
          {data.productName}
        </Text>
        {data.category == "accessory" || "product" ? (
          data.isAvailable ? (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <FontAwesome
                name="circle"
                style={{
                  fontSize: 12,
                  marginRight: 6,
                  color: COLOURS.green,
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: COLOURS.green,
                }}
              >
                En stock
              </Text>
            </View>
          ) : (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <FontAwesome
                name="circle"
                style={{
                  fontSize: 12,
                  marginRight: 6,
                  color: COLOURS.red,
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: COLOURS.red,
                }}
              >
                Pas disponible
              </Text>
            </View>
          )
        ) : null}
        <Text
          style={{
            color: COLOURS.white,
          }}
        >
          {data.productPrice} €
        </Text>
      </TouchableOpacity>
    );
  };

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
      <View
        style={{
          width: "100%",
          height: "100%",
          // backgroundColor: COLOURS.white,
        }}
      >
        <StatusBar backgroundColor={COLOURS.grey} barStyle="dark-content" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 16,
            }}
          >
            <TouchableOpacity onPress={()=>{navigation.navigate("Profile")}}>
              <Entypo
                name="user"
                style={{
                  fontSize: 18,
                  color: COLOURS.white,
                  padding: 12,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: COLOURS.backgroundLight,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("MyCart")}>
              <MaterialCommunityIcons
                name="cart"
                style={{
                  fontSize: 18,
                  color: COLOURS.white,
                  padding: 12,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: COLOURS.backgroundLight,
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginBottom: 10,
              padding: 16,
            }}
          >
            <Text
              style={{
                fontSize: 26,
                color: COLOURS.white,
                fontWeight: "500",
                letterSpacing: 1,
                marginBottom: 10,
              }}
            >
              Paye ton kawa 
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: COLOURS.white,
                fontWeight: "400",
                letterSpacing: 1,
                lineHeight: 24,
              }}
            >
              Le cafe c'est la vie
            </Text>
          </View>
          <View
            style={{
              padding: 16,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    color: COLOURS.white,
                    fontWeight: "500",
                    letterSpacing: 1,
                  }}
                >
                  Machine
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: COLOURS.black,
                    fontWeight: "400",
                    opacity: 0.5,
                    marginLeft: 10,
                  }}
                >
                  2
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 14,
                  color: COLOURS.blue,
                  fontWeight: "400",
                }}
              >
                Voir tout
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-around",
              }}
            >
              {products.map((data) => {
                return <ProductCard data={data} key={data.id} />;
              })}
            </View>
          </View>

          <View
            style={{
              padding: 16,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    color: COLOURS.white,
                    fontWeight: "500",
                    letterSpacing: 1,
                  }}
                >
                  Café
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: COLOURS.black,
                    fontWeight: "400",
                    opacity: 0.5,
                    marginLeft: 10,
                  }}
                >
                  4
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 14,
                  color: COLOURS.blue,
                  fontWeight: "400",
                }}
              >
                Voir tout
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-around",
              }}
            >
              {accessory.map((data) => {
                return <ProductCard data={data} key={data.id} />;
              })}
            </View>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default Home;
