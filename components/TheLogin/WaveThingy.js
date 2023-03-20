import { Feather } from "@expo/vector-icons";
import { MotiView } from "moti";
import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Easing } from "react-native-reanimated";

const _color = "#ffffff";
const _size = 60;

export const WaveThingy = () => {
  return (
    <View style={{ marginTop:"14%",marginLeft:"6%"  }}>
      <View style={[styles.dot, styles.center]}>
        {[...Array(3).keys()].map((index) => {
          return (
            <MotiView
              from={{ opacity: 0.7, scale: 1 }}
              animate={{ opacity: 0, scale: 4 }}
              transition={{
                type: "timing",
                duration: 2000,
                easing: Easing.out(Easing.ease),
                delay: index * 400,
                repeatReverse: false,
                loop: true,
              }}
              key={index}
              style={[StyleSheet.absoluteFillObject, styles.dot]}
            />
          );
        })}
        <Image
          //   style={styles.tinyLogo}
          source={require('./cf.png')}
          style={{ width: 40, height: 40 ,marginBottom:9,marginLeft:1 }}
        />

      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  dot: {
    width: _size,
    height: _size,
    borderRadius: _size,
    backgroundColor: _color,
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
});
