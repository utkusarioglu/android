import { type FC } from "react";
import { Card, Text } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

interface BlockCardProps {
  item: {
    title: string;
    body: string;
  };
}
export const BlockCard: FC<BlockCardProps> = ({ item: { title, body } }) => {
  return <Card style={styles.card}>
    <Text style={styles.title} category="h6">{title}</Text>
    <Text>{body}</Text>
  </Card>;
};

const styles = StyleSheet.create({
  card: {
    marginRight: 4,
  },
  title: {
    // fontSize: 20
  }
})
