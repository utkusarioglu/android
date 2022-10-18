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

type MessagesScreenProps = NativeStackScreenProps<
  AppNavigatorParams,
  "Messages"
>;

const BackIcon: RenderProp<Partial<ImageProps>> = (props) => (
  <Icon {...props} name="arrow-back" />
);

const MessagesScreen: FC<MessagesScreenProps> = ({ navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation
        title="MyApp"
        alignment="center"
        accessoryLeft={BackAction}
      />
      <Divider />
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text category="h1">Messages</Text>
        <Button>Button</Button>
      </Layout>
    </SafeAreaView>
  );
};

export default MessagesScreen;
