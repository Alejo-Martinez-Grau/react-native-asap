import * as React from "react";
import { Avatar, Button, Card, Title, List } from "react-native-paper";

const Categoria = () => {
  const [expanded, setExpanded] = React.useState(true);

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
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
        </List.Section>
      </Card.Actions>
    </Card>
  );
};

export default Categoria;
