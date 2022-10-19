import React, { type FC } from "react";
import { StyleSheet, View } from "react-native";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Layout, Button } from "@ui-kitten/components";
import { type AppNavigatorParams } from "_types/navigation.types";
import CenterCenterLayout from "_layouts/CenterCenter.layout";

const LoginScreen: FC<
  NativeStackScreenProps<AppNavigatorParams, "Login"> & {
    loginOnPress: () => void;
  }
> = ({ navigation: { navigate }, loginOnPress }) => (
  <SafeAreaView style={styles.safeAreaView}>
    <CenterCenterLayout>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>BlockSocial</Text>
        <Text style={styles.motto}>The most amazong app ever</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={loginOnPress} style={styles.button}>
          Login
        </Button>
        <Button
          appearance="outline"
          style={styles.button}
          onPress={() => navigate("Help", { content: "This is the content" })}>
          Help
        </Button>
      </View>
    </CenterCenterLayout>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  titleContainer: {
    padding: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 50,
    fontFamily: "Teko",
    alignSelf: "center",
  },
  motto: {
    alignSelf: "center",
    fontFamily: "Tajawal",
  },
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    width: "100%",
    padding: 16,
  },
  button: {
    marginBottom: 8,
    width: "100%",
  },
});

export default LoginScreen;
