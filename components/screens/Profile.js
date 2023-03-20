import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import InputText from "../TheLogin/InputTextComponent/InputText";
import { COLOURS } from "../database/Database";
import { TouchableOpacity } from "react-native";

export default function Profile({ navigation }) {
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
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              paddingTop: 16,
              paddingHorizontal: 16,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialCommunityIcons
                name="chevron-left"
                style={{
                  fontSize: 18,
                  color: COLOURS.backgroundDark,
                  padding: 12,
                  backgroundColor: COLOURS.backgroundMedium,
                  borderRadius: 12,
                }}
              />
            </TouchableOpacity>
          </View>
          {/* <View style={styles.titleBar}>
             <Ionicons
              name="ios-arrow-back"
              size={24}
              color="#52575D"
            ></Ionicons>
            <Ionicons name="md-more" size={24} color="#52575D"></Ionicons> 
          </View> */}

          <View style={{ alignSelf: "center" }}>
            <View style={styles.profileImage}>
              <Image
                source={require("../../assets/fonts/test2.jpg")}
                style={styles.image}
                // resizeMode="center"
              ></Image>
            </View>
            <View style={styles.dm}>
              <MaterialIcons
                name="chat"
                size={18}
                color="#DFD8C8"
              ></MaterialIcons>
            </View>
            <View style={styles.active}></View>
            <View style={styles.add}>
              <Ionicons
                name="ios-add"
                size={48}
                color="#DFD8C8"
                style={{ marginTop: 6, marginLeft: 2 }}
              ></Ionicons>
            </View>
          </View>

          <View style={styles.infoContainer}>
            <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>
              Nora Raggui

            </Text>
            {/* <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>
              Photographer
            </Text> */}
          </View>

          {/* <View style={{ marginTop: 32 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.mediaImageContainer}>
                <Image
                  source={require("../../assets/fonts/media1.jpg")}
                  style={styles.image}
                  resizeMode="cover"
                ></Image>
              </View>
              <View style={styles.mediaImageContainer}>
                <Image
                  source={require("../../assets/fonts/media2.jpg")}
                  style={styles.image}
                  resizeMode="cover"
                ></Image>
              </View>
              <View style={styles.mediaImageContainer}>
                <Image
                  source={require("../../assets/fonts/media3.jpg")}
                  style={styles.image}
                  resizeMode="cover"
                ></Image>
              </View>
            </ScrollView>
            <View style={styles.mediaCount}>
              <Text
                style={[
                  styles.text,
                  { fontSize: 24, color: "#DFD8C8", fontWeight: "300" },
                ]}
              >
                70
              </Text>
              <Text
                style={[
                  styles.text,
                  {
                    fontSize: 12,
                    color: "#DFD8C8",
                    textTransform: "uppercase",
                  },
                ]}
              >
                Media
              </Text>
            </View>
          </View> */}
          <View style={{ marginTop: "10%" }}>
            <InputText
              name="Email"
              placeHolder={"Entrez votre prenom"}
              value={"nora.raggui78@gmail.com"}
              required
            />
            <InputText
              name="Nom de l'entreprise"
              placeHolder={"Entrez votre prenom"}
              value={"Epsi"}
              required
            />
            <InputText
              name="Ville"
              placeHolder={"Entrez votre prenom"}
              value={"Paris"}
              required
            />
          </View>
          <View style={[styles.statsContainer, { marginTop: "15%" }]}>
            <View style={styles.statsBox}>
              <Text style={[styles.text, { fontSize: 24 }]}>12</Text>
              <Text style={[styles.text, styles.subText]}>Article acheter</Text>
            </View>
            <View
              style={[
                styles.statsBox,
                {
                  borderColor: "#DFD8C8",
                  borderLeftWidth: 1,
                  borderRightWidth: 1,
                },
              ]}
            >
              <Text style={[styles.text, { fontSize: 24 }]}>2</Text>
              <Text style={[styles.text, styles.subText]}>
                Article retourner
              </Text>
            </View>
            <View style={styles.statsBox}>
              <Text style={[styles.text, { fontSize: 24 }]}>0</Text>
              <Text style={[styles.text, styles.subText]}>abonnement</Text>
            </View>
          </View>
          {/* <Text style={[styles.subText, styles.recent]}>Recent Activity</Text> */}
          {/* <View style={{ alignItems: "center" }}>
            <View style={styles.recentItem}>
              <View style={styles.activityIndicator}></View>
              <View style={{ width: 250 }}>
                <Text
                  style={[styles.text, { color: "#41444B", fontWeight: "300" }]}
                >
                  Started following{" "}
                  <Text style={{ fontWeight: "400" }}>Jake Challeahe</Text> and{" "}
                  <Text style={{ fontWeight: "400" }}>Luis Poteer</Text>
                </Text>
              </View>
            </View>

            <View style={styles.recentItem}>
              <View style={styles.activityIndicator}></View>
              <View style={{ width: 250 }}>
                <Text
                  style={[styles.text, { color: "#41444B", fontWeight: "300" }]}
                >
                  Started following{" "}
                  <Text style={{ fontWeight: "400" }}>Luke Harper</Text>
                </Text>
              </View>
            </View>
          </View> */}
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: "white",
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16,
  },
  subText: {
    fontSize: 12,
    color: "white",
    textTransform: "uppercase",
    fontWeight: "500",
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
  },
  dm: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  active: {
    backgroundColor: "#31a24c",
    position: "absolute",
    bottom: 28,
    left: 10,
    padding: 4,
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  add: {
    backgroundColor: "#41444B",
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16,
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 32,
  },
  statsBox: {
    alignItems: "center",
    flex: 1,
  },
  mediaImageContainer: {
    width: 180,
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10,
  },
  mediaCount: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: "50%",
    marginTop: -50,
    marginLeft: 30,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.38)",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    shadowOpacity: 1,
  },
  recent: {
    marginLeft: 78,
    marginTop: 32,
    marginBottom: 6,
    fontSize: 10,
  },
  recentItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  activityIndicator: {
    backgroundColor: "#CABFAB",
    padding: 4,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginTop: 3,
    marginRight: 20,
  },
});
