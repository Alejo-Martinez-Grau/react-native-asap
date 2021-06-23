import React from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import { Divider, Button } from "react-native-paper";

import TablasCarrito from "./TablasCarrito";

const Carrito = () => {
  return (
    <ScrollView>
      <TablasCarrito>Categoria 1</TablasCarrito>
      <TablasCarrito>Categoria 2</TablasCarrito>
      <TablasCarrito>Categoria 3</TablasCarrito>
      <Divider />
      <View>
        <Text style={styles.totalText}>
          Total a Pagar: ${Math.floor(Math.random() * 15000)}
        </Text>
      </View>
      <Divider />
      <Button>Pagar</Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  totalText: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Carrito;
