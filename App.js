import * as React from "react";
import { AppRegistry } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { name as appName } from "./app.json";
import MyComponent from "./MyComponent";

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
      <MyComponent />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
