import React from "react";
import { ScrollView } from "react-native";

import Categoria from "./Categoria";

const ComponenteCategorias = () => {
  return (
    <ScrollView>
      <Categoria picsum="https://picsum.photos/700">Categoria 1</Categoria>
      <Categoria picsum="https://picsum.photos/600">Categoria 2</Categoria>
      <Categoria picsum="https://picsum.photos/500">Categoria 3</Categoria>
    </ScrollView>
  );
};

export default ComponenteCategorias;
