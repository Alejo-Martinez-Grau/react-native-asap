import * as React from "react";
import { View, Text, Button, ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "./WelcomeScreen";
import Store from "./Store";

function HomeScreen({ navigation, screenName }) {
  return <WelcomeScreen screenName="Store" />;
}

function ModalScreen({ navigation }) {
  return (
    <ImageBackground
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      source={require("../assets/bando.jpg")}
    >
      <View>
        <Text
          style={{
            fontSize: 30,
            color: "#FFF",
            textShadowRadius: 10,
            textShadowColor: "#000",
          }}
        >
          Modal para registrarse
        </Text>
        <Button onPress={() => navigation.goBack()} title="Volver" />
      </View>
    </ImageBackground>
  );
}

function StoreScreen({ navigation, screenName }) {
  return <Store screenName="Store" />;
}

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={HomeScreen} />
      {/* <MainStack.Screen name="Details" component={DetailsScreen} /> */}
      <MainStack.Screen name="Store" component={StoreScreen} />
    </MainStack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal" headerMode="none">
        <RootStack.Screen name="Main" component={MainStackScreen} />
        <RootStack.Screen name="MyModal" component={ModalScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
