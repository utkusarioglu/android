import "react-native-gesture-handler";
import "react-native-get-random-values";
import "@ethersproject/shims";
import React from "react";
import AppNavigator from "./components/navigators/App.navigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { StyleSheet } from "react-native";
import { darkTheme } from "./theme";

const App = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={darkTheme}>
        <SafeAreaProvider>
          <Layout style={styles.container}>
            <AppNavigator />
          </Layout>
        </SafeAreaProvider>
      </ApplicationProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default App;
