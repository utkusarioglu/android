import React, { type FC } from "react";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { type AppNavigatorParams } from "_types/navigation.types";

import {
  Button,
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import { type RenderProp } from "@ui-kitten/components/devsupport";
import { type ImageProps } from "react-native-svg";
import TopLeftLayout from "_layouts/TopLeft.layout";

type MessagesScreenProps = NativeStackScreenProps<
  AppNavigatorParams,
  "Messages"
>;

const BackIcon: RenderProp<Partial<ImageProps>> = (props) => (
  <Icon name="facebook" {...props} />
);

const MessagesScreen: FC<MessagesScreenProps> = ({ navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={<Text>◀</Text>} onPress={navigateBack} />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopLeftLayout>
        <TopNavigation
          title="MyApp"
          alignment="center"
          accessoryLeft={BackAction}
        />
        <Divider />
        <BackIcon height={20} width={20} />
        <Text category="h1">Messages</Text>
        <Button>Button</Button>
      </TopLeftLayout>
    </SafeAreaView>
  );
};

export default MessagesScreen;
