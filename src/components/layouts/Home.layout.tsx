import React, { type FC } from "react";
import { StyleSheet, View } from "react-native";
import { Button, TopNavigation, Divider } from "@ui-kitten/components";
import TopLeftLayout from "_layouts/TopLeft.layout";
import BlockCarouselView from "_views/block-carousel/BlockCarousel.view";
import BlockListView from "_views/block-list/BlockList.view";
import { HomeScreenProps } from "_screens/Home.screen";

type HomeLayoutProps = Pick<HomeScreenProps, "logoutOnPress">;

const HomeLayout: FC<HomeLayoutProps> = ({ logoutOnPress }) => {
  return (
    <TopLeftLayout>
      <TopNavigation title="Home" alignment="center" />
      <Divider />
      <BlockCarouselView />
      <BlockListView />
      <View style={styles.buttonContainer}>
        <Button style={styles.button} onPress={logoutOnPress}>
          Logout
        </Button>
      </View>
    </TopLeftLayout>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    padding: 16,
  },
  button: {
    marginBottom: 8,
    width: "100%",
  },
});

export default HomeLayout;
