import * as React from "react";
import { BottomNavigation } from "react-native-paper";

import ComponenteCategorias from "./ComponenteCategorias";
import Carrito from "./Carrito";

const StoreRoute = () => <ComponenteCategorias />;

const CarritoRoute = () => <Carrito />;

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
