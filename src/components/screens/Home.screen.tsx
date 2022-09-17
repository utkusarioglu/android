import React, { type FC } from "react";
import { SafeAreaView } from "react-native";
import { Button, Divider, Layout, TopNavigation } from "@ui-kitten/components";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";
import { type AppNavigatorParams } from "../navigators/App.navigator";

type HomeScreenProps = NativeStackScreenProps<AppNavigatorParams, "Home"> & {
  logoutOnPress: () => void;
};

const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
  const navigateDetails = () => {
    navigation.navigate("Messages");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="MyApp" alignment="center" />
      <Divider />
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button onPress={navigateDetails}>Messages</Button>
      </Layout>
    </SafeAreaView>
  );
};

export default HomeScreen;
