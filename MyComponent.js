import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <WelcomeScreen />;

const RecentsRoute = () => <ViewImageScreen />;

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "music", title: "Music", icon: "playlist-music" },
    { key: "albums", title: "Albums", icon: "album" },
    { key: "recents", title: "Recents", icon: "history" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MyComponent;
