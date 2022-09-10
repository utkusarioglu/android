import React, { useEffect, useState, type FC } from "react";
import { View, Text, StatusBar, Button, useColorScheme } from "react-native";
import {
  createNativeStackNavigator,
  type NativeStackScreenProps,
} from "@react-navigation/native-stack";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

type AppNavigatorParams = {
  Home: undefined;
  Messages: undefined;
  LogIn: undefined;
  Help: {
    content: string;
  };
};

const Stack = createNativeStackNavigator<AppNavigatorParams>();

const HomeScreen: FC<
  NativeStackScreenProps<AppNavigatorParams, "Home"> & {
    logoutOnPress: () => void;
  }
> = ({ navigation: { navigate }, logoutOnPress }) => (
  <SafeAreaView>
    <StatusBar barStyle={true ? "light-content" : "dark-content"} />
    <Text>Home screen</Text>
    <Button onPress={() => navigate("Messages")} title="Messages" />
    <Button onPress={logoutOnPress} title="Logout" />
  </SafeAreaView>
);

const MessagesScreen: FC<
  NativeStackScreenProps<AppNavigatorParams, "Messages">
> = ({ navigation: { navigate } }) => (
  <SafeAreaView>
    <Text>Messages Screen</Text>
    <Button title="Go Home" onPress={() => navigate("Home")} />
  </SafeAreaView>
);

const LogInScreen: FC<
  NativeStackScreenProps<AppNavigatorParams, "LogIn"> & {
    loginOnPress: () => void;
  }
> = ({ navigation: { navigate }, loginOnPress }) => (
  <SafeAreaView>
    <Text>Log in screen</Text>
    <Text>Will login in 3 seconds</Text>
    <Button
      title="Help"
      onPress={() => navigate("Help", { content: "hhiiii" })}
    />
    <Button title="Login" onPress={loginOnPress} />
  </SafeAreaView>
);

const HelpScreen: FC<NativeStackScreenProps<AppNavigatorParams, "Help">> = ({
  route: {
    params: { content },
  },
}) => (
  <SafeAreaView>
    <Text>Content:</Text>
    <Text>{content}</Text>
  </SafeAreaView>
);

const AppNavigator = () => {
  const scheme = useColorScheme();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logoutOnPress = () => setIsLoggedIn(false);
  const loginOnPress = () => setIsLoggedIn(true);

  return (
    <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
      {isLoggedIn ? (
        <Stack.Navigator>
          <Stack.Screen name="Home">
            {(props) => <HomeScreen {...props} logoutOnPress={logoutOnPress} />}
          </Stack.Screen>
          <Stack.Screen name="Messages" component={MessagesScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="LogIn">
            {(props) => <LogInScreen {...props} loginOnPress={loginOnPress} />}
          </Stack.Screen>
          <Stack.Screen
            name="Help"
            component={HelpScreen}
            initialParams={{ content: "Stack content" }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
