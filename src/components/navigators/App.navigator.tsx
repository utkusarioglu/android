import React, { useState } from "react";
import { StatusBar, useColorScheme } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import HomeScreen from "_screens/Home.screen";
import HelpScreen from "_screens/Help.screen";
import LoginScreen from "_screens/Login.screen";
import { type AppNavigatorParams } from "_types/navigation.types";

const Stack = createNativeStackNavigator<AppNavigatorParams>();

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
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login">
            {(props) => <LoginScreen {...props} loginOnPress={loginOnPress} />}
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
