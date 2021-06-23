import * as React from "react";
import {
  Avatar,
  Button,
  Card,
  Title,
  List,
  Checkbox,
} from "react-native-paper";

const Categoria = (props) => {
  const [expanded, setExpanded] = React.useState(true);
  //casilleros chequeados
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  const [checked4, setChecked4] = React.useState(false);
  const [checked5, setChecked5] = React.useState(false);
  //precio de los items
  const [precios] = React.useState(
    [...Array(5)].map(() => Math.floor(Math.random() * 1000))
  );

  const handlePress = () => setExpanded(!expanded);

  return (
    <Card>
      <Card.Content>
        <Title>{props.children}</Title>
      </Card.Content>
      <Card.Cover source={{ uri: `${props.picsum}` }} />

      <Card.Actions>
        <List.Section width="100%">
          <List.Accordion
            title={`"Items ${props.children}"`}
            left={(props) => <List.Icon {...props} icon="expand-all" />}
            expanded={expanded}
            onPress={handlePress}
          >
            <Checkbox.Item
              label={`Item 1                           $${precios[0]}`}
              status={checked1 ? "checked" : "unchecked"}
              onPress={() => {
                setChecked1(!checked1);
              }}
            />
            <Checkbox.Item
              label={`Item 2                           $${precios[1]}`}
              status={checked2 ? "checked" : "unchecked"}
              onPress={() => {
                setChecked2(!checked2);
              }}
            />
            <Checkbox.Item
              label={`Item 3                           $${precios[2]}`}
              status={checked3 ? "checked" : "unchecked"}
              onPress={() => {
                setChecked3(!checked3);
              }}
            />
            <Checkbox.Item
              label={`Item 4                           $${precios[3]}`}
              status={checked4 ? "checked" : "unchecked"}
              onPress={() => {
                setChecked4(!checked4);
              }}
            />
            <Checkbox.Item
              label={`Item 5                           $${precios[4]}`}
              status={checked5 ? "checked" : "unchecked"}
              onPress={() => {
                setChecked5(!checked5);
              }}
            />
          </List.Accordion>
        </List.Section>
      </Card.Actions>
    </Card>
  );
};

export default Categoria;
