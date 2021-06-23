import * as React from "react";
import { AppRegistry } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { name as appName } from "./app.json";

//import WelcomeScreen from "./app/screens/WelcomeScreen";
//import MyComponent from "./MyComponent";
import NavigationApp from "./NavigationApp";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    accent: "yellow",
  },
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      {/* <WelcomeScreen /> */}
      {/* <MyComponent /> */}
      <NavigationApp />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
