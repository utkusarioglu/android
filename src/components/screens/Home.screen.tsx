import React, { type FC } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import {
  BottomNavigation,
  BottomNavigationTab,
  ViewPager,
} from "@ui-kitten/components";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";
import { type AppNavigatorParams } from "_types/navigation.types";
import HomeLayout from "_layouts/Home.layout";
import MessagesLayout from "_layouts/Messages.layout";
import IconView from "_views/icon/Icon.view";

const homeBottomNavigationItems = [
  { title: "Home!", iconName: "home-outline" },
  { title: "Messages", iconName: "message-square-outline" },
  { title: "Profile", iconName: "color-palette-outline" },
];

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

const HomeScreen: FC<HomeScreenProps> = ({ logoutOnPress }) => {
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
        {homeBottomNavigationItems.map(({ title, iconName }) => (
          <BottomNavigationTab
            key={title}
            title={title}
            style={styles.bottomNavigationTab}
            icon={(props) => <IconView name={iconName} {...props} />}
          />
        ))}
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
  bottomNavigationTab: {
    paddingTop: 8,
  },
});

export default HomeScreen;
