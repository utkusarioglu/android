import React, { useState, type FC } from "react";
import { StatusBar, Button, useColorScheme } from "react-native";
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
import { Text } from "@ui-kitten/components";
import HomeScreen from "_screens/Home.screen";
import MessagesScreen from "_screens/Messages.screen";

export type AppNavigatorParams = {
  Home: undefined;
  Messages: undefined;
  LogIn: undefined;
  Help: {
    content: string;
  };
};

const Stack = createNativeStackNavigator<AppNavigatorParams>();

const LogInScreen: FC<
  NativeStackScreenProps<AppNavigatorParams, "LogIn"> & {
    loginOnPress: () => void;
  }
> = ({ navigation: { navigate }, loginOnPress }) => (
  <SafeAreaView>
    <Text>Log in screen</Text>
    <Text>Will login in 3 seconds</Text>
    <Button title="Messages" onPress={() => navigate("Messages")} />
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
    <NavigationContainer>
      {isLoggedIn ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home">
            {(props) => <HomeScreen {...props} logoutOnPress={logoutOnPress} />}
          </Stack.Screen>
          <Stack.Screen name="Messages" component={MessagesScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
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
