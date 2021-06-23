import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import Categoria from "./Categoria";

import ViewImageScreen from "./ViewImageScreen";

const StoreRoute = () => <Categoria />;

const CarritoRoute = () => <Text>Carrito</Text>;

//const RecentsRoute = () => <ViewImageScreen />;

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "store", title: "Store", icon: "storefront-outline" },
    { key: "carrito", title: "Carrito", icon: "cart" },
    // { key: "recents", title: "Recents", icon: "history" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    store: StoreRoute,
    carrito: CarritoRoute,
    //recents: RecentsRoute,
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
