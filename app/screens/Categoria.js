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
  const [checked, setChecked] = React.useState(false);

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
              label={`Item 1                           $${Math.floor(
                Math.random() * 1000
              )}`}
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Checkbox.Item
              label={`Item 2                           $${Math.floor(
                Math.random() * 1000
              )}`}
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Checkbox.Item
              label={`Item 3                           $${Math.floor(
                Math.random() * 1000
              )}`}
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Checkbox.Item
              label={`Item 4                           $${Math.floor(
                Math.random() * 1000
              )}`}
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Checkbox.Item
              label={`Item 5                           $${Math.floor(
                Math.random() * 1000
              )}`}
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
            />
          </List.Accordion>
        </List.Section>
      </Card.Actions>
    </Card>
  );
};

export default Categoria;
