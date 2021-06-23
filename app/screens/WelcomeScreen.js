import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, TextInput } from "react-native-paper";

function WelcomeScreen({ screenName }) {
  const [text, setText] = React.useState("");

  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require("../assets/bando.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text style={styles.textlogo}>Vendé lo que no necesitás</Text>
      </View>
      <View style={styles.login}>
        <TextInput
          mode="outlined"
          label="Usuario"
          placeholder="Ingrese su Usuario"
        />
        <TextInput
          mode="outlined"
          label="Password"
          secureTextEntry
          right={<TextInput.Icon name="eye" />}
        />
      </View>
      <Button
        style={styles.omitirButton}
        mode="contained"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate(screenName, {
            itemId: 86,
            otherParam: "anything you want here",
          });
        }}
      >
        Omitir
      </Button>

      <Button
        style={styles.registerButton}
        mode="contained"
        onPress={() => navigation.navigate("MyModal")}
        title="Open Modal"
      >
        Registrarse
      </Button>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1, //So that image background takes all the screen
    justifyContent: "flex-end",
    alignItems: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
    justifyContent: "center",
    backgroundColor: "#fc5c65",
  },
  omitirButton: {
    position: "absolute",
    bottom: 200,
    alignItems: "center",
  },

  logo: {
    width: 100,
    height: 100,
    tintColor: "#FFF",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  login: {
    width: "100%",
    justifyContent: "center",
    bottom: 250,
  },
  textlogo: {
    color: "#FFF",
    fontSize: 20,
    textShadowRadius: 15,
    textShadowColor: "#000",
  },
});

export default WelcomeScreen;
