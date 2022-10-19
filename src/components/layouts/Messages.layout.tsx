import { Divider, TopNavigation } from "@ui-kitten/components";
import TopLeftLayout from "_layouts/TopLeft.layout";
import MessagesListView from "_views/messages-list/MessagesList.view";

const MessagesLayout = () => {
  return (
    <TopLeftLayout>
      <TopNavigation title="Messages" alignment="center" />
      <Divider />
      <MessagesListView />
    </TopLeftLayout>
  );
};

export default MessagesLayout;
