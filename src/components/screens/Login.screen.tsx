import React, { type FC } from "react";
import { Button } from "react-native";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "@ui-kitten/components";
import { Layout } from "@ui-kitten/components";
import { type AppNavigatorParams } from "_types/navigation.types";

const LoginScreen: FC<
  NativeStackScreenProps<AppNavigatorParams, "Login"> & {
    loginOnPress: () => void;
  }
> = ({ navigation: { navigate }, loginOnPress }) => (
  <SafeAreaView>
    <Layout>
      <Text>Log in screen</Text>
      <Text>Will login in 3 seconds</Text>
      <Button
        title="Help"
        onPress={() => navigate("Help", { content: "This is the content" })}
      />
      <Button title="Login" onPress={loginOnPress} />
    </Layout>
  </SafeAreaView>
);

export default LoginScreen;
