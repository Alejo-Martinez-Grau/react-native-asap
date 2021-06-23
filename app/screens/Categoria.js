import * as React from "react";
import {
  Avatar,
  Button,
  Card,
  Title,
  List,
  Checkbox,
} from "react-native-paper";

const Categoria = () => {
  const [expanded, setExpanded] = React.useState(true);
  const [checked, setChecked] = React.useState(false);

  const handlePress = () => setExpanded(!expanded);

  return (
    <Card>
      <Card.Content>
        <Title>Categoria 1</Title>
      </Card.Content>
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      <Card.Actions>
        <List.Section width="100%">
          <List.Accordion
            title="Items categoria 1"
            left={(props) => <List.Icon {...props} icon="expand-all" />}
            expanded={expanded}
            onPress={handlePress}
          >
            <Checkbox.Item
              label="Item 1"
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Checkbox.Item
              label="Item 2"
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Checkbox.Item
              label="Item 3"
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Checkbox.Item
              label="Item 4"
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Checkbox.Item
              label="Item 5"
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
