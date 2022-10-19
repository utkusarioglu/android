import { type FC } from "react";
import { List, ListItem, Text, Divider } from "@ui-kitten/components";
import { View } from "react-native";

interface BlockListItemProps {
  item: {
    title: string;
    body: string;
  };
}

const BlockListItem: FC<BlockListItemProps> = ({ item: { title, body } }) => {
  return <ListItem title={title} description={body} />;
};

const data = [
  {
    title: "one",
    body: "one description",
  },
  {
    title: "two",
    body: "two description",
  },
];

const BlockListView = () => {
  return (
    <List
      data={data}
      renderItem={BlockListItem}
      ItemSeparatorComponent={Divider}
    />
  );
};

export default BlockListView;
