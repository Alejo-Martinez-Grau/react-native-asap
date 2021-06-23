import React from "react";
import { ScrollView } from "react-native";

import Categoria from "./Categoria";

const ComponenteCategorias = () => {
  return (
    <ScrollView>
      <Categoria />
      <Categoria />
      <Categoria />
    </ScrollView>
  );
};

export default ComponenteCategorias;
