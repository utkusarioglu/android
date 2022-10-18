import React, { type FC } from "react";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "@ui-kitten/components";
import { type AppNavigatorParams } from "_types/navigation.types";

export const HelpScreen: FC<
  NativeStackScreenProps<AppNavigatorParams, "Help">
> = ({
  route: {
    params: { content },
  },
}) => (
  <SafeAreaView>
    <Text>Content:</Text>
    <Text>{content}</Text>
  </SafeAreaView>
);
