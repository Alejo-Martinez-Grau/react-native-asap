import * as React from "react";
import { DataTable } from "react-native-paper";

const TablasCarrito = (props) => {
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>{props.children}</DataTable.Title>
        <DataTable.Title numeric>$ Precio</DataTable.Title>
        <DataTable.Title numeric>cantidad</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell>Item 1</DataTable.Cell>
        <DataTable.Cell numeric>
          {Math.floor(Math.random() * 1000)}
        </DataTable.Cell>
        <DataTable.Cell numeric>1</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Item 2</DataTable.Cell>
        <DataTable.Cell numeric>
          {Math.floor(Math.random() * 1000)}
        </DataTable.Cell>
        <DataTable.Cell numeric>1</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Item 3</DataTable.Cell>
        <DataTable.Cell numeric>
          {Math.floor(Math.random() * 1000)}
        </DataTable.Cell>
        <DataTable.Cell numeric>1</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Item 4</DataTable.Cell>
        <DataTable.Cell numeric>
          {Math.floor(Math.random() * 1000)}
        </DataTable.Cell>
        <DataTable.Cell numeric>1</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Item 5</DataTable.Cell>
        <DataTable.Cell numeric>
          {Math.floor(Math.random() * 1000)}
        </DataTable.Cell>
        <DataTable.Cell numeric>1</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  );
};

export default TablasCarrito;
