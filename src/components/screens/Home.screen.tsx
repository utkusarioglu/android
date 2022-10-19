import React, { type FC } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import {
  BottomNavigation,
  BottomNavigationTab,
  // Icon,
  Text,
  ViewPager,
} from "@ui-kitten/components";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";
import { type AppNavigatorParams } from "_types/navigation.types";
import { type RenderProp } from "@ui-kitten/components/devsupport";
import { type ImageProps } from "react-native-svg";
import HomeLayout from "_layouts/Home.layout";
import MessagesLayout from "_layouts/Messages.layout";

const HomeIcon: RenderProp<Partial<ImageProps>> = (props) => (
  <Text category="h4">H</Text>
  // <Icon name="facebook" {...props} />
);

const MessagesIcon: RenderProp<Partial<ImageProps>> = (props) => (
  <Text category="h4">M</Text>
  // <Icon name="facebook" {...props} />
);

export type HomeScreenProps = NativeStackScreenProps<
  AppNavigatorParams,
  "Home"
> & {
  logoutOnPress: () => void;
};

const useBottomNavigationState = (initialState = 0) => {
  const [selectedIndex, setSelectedIndex] = React.useState(initialState);
  return { selectedIndex, onSelect: setSelectedIndex };
};

const HomeScreen: FC<HomeScreenProps> = ({ navigation, logoutOnPress }) => {
  const bottomState = useBottomNavigationState();

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ViewPager
        selectedIndex={bottomState.selectedIndex}
        style={styles.pager}
        onSelect={(index) => bottomState.onSelect(index)}>
        <HomeLayout logoutOnPress={logoutOnPress} />
        <MessagesLayout />
      </ViewPager>
      <BottomNavigation {...bottomState}>
        <BottomNavigationTab title="Home" icon={HomeIcon} />
        <BottomNavigationTab title="Messages" icon={MessagesIcon} />
      </BottomNavigation>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  pager: {
    flex: 1,
  },
});

export default HomeScreen;
