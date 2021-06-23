import * as React from "react";
import { View, Text, Button, ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import MyComponent from "./MyComponent";

function HomeScreen({ navigation, screenName }) {
  return <WelcomeScreen screenName="Store" />;
}

function ModalScreen({ navigation }) {
  return (
    <ImageBackground
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      source={require("./app/assets/bando.jpg")}
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

// function DetailsScreen({ route, navigation }) {
//   /* 2. Get the param */
//   const { itemId, otherParam } = route.params;
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Details Screen</Text>
//       <Text>itemId: {JSON.stringify(itemId)}</Text>
//       <Text>otherParam: {JSON.stringify(otherParam)}</Text>
//       <Button
//         title="Go to Details... again"
//         onPress={() =>
//           navigation.push("Details", {
//             itemId: Math.floor(Math.random() * 100),
//           })
//         }
//       />
//       <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }

function StoreScreen({ navigation, screenName }) {
  return <MyComponent screenName="Store" />;
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
