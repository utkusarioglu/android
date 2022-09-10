import "react-native-gesture-handler";
import "react-native-get-random-values";
import "@ethersproject/shims";
import React from "react";
import AppNavigator from "./components/navigators/App.navigator";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
};

export default App;
