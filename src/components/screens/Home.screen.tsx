import React, { type FC } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Button, Divider, Layout, TopNavigation } from "@ui-kitten/components";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";
import { type AppNavigatorParams } from "_types/navigation.types";

type HomeScreenProps = NativeStackScreenProps<AppNavigatorParams, "Home"> & {
  logoutOnPress: () => void;
};

const HomeScreen: FC<HomeScreenProps> = ({ navigation, logoutOnPress }) => {
  const navigateMessages = () => {
    navigation.navigate("Messages");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="MyApp" alignment="center" />
      <Divider />
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button onPress={navigateMessages}>Messages</Button>
        <Button onPress={logoutOnPress}>Logout</Button>
      </Layout>
    </SafeAreaView>
  );
};

export default HomeScreen;
