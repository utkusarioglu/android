import { List, ListItem, Divider, Avatar, Text } from "@ui-kitten/components";
import { FC } from "react";
import { StyleSheet } from "react-native";
import TopLeftLayout from "_layouts/TopLeft.layout";
import IconView from "_views/icon/Icon.view";

const data = [
  {
    sender: "Someone",
    preview: "Sup dude",
    avatar: "https://via.placeholder.com/150/24f333",
  },
  {
    sender: "Other person",
    preview: "I'm a banana",
    avatar: "https://via.placeholder.com/150/24f355",
  },
  {
    sender: "Yellow head",
    preview: "I'm the real banana",
    avatar: "https://via.placeholder.com/150/24f355",
  },
  {
    sender: "Watermelon",
    preview: "I'm actually a peach",
    avatar: "https://via.placeholder.com/150/24f355",
  },
];

interface MessageListItemProps {
  item: {
    sender: string;
    preview: string;
    avatar: string;
  };
}

const MessageListItem: FC<MessageListItemProps> = ({
  item: { sender, preview, avatar },
}) => {
  return (
    <ListItem
      title={sender}
      description={preview}
      accessoryLeft={() => (
        <Avatar style={styles.avatar} size="tiny" source={{ uri: avatar }} />
      )}
      accessoryRight={(props) => <IconView name="camera-outline" {...props} />}
    />
  );
};

const MessagesListView = () => {
  return (
    <TopLeftLayout>
      <List
        data={data}
        renderItem={MessageListItem}
        ItemSeparatorComponent={Divider}
      />
    </TopLeftLayout>
  );
};

const styles = StyleSheet.create({
  avatar: {
    margin: 8,
  },
});

export default MessagesListView;
