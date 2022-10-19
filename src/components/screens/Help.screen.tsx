import React, { type FC } from "react";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "@ui-kitten/components";
import { type AppNavigatorParams } from "_types/navigation.types";
import CenterCenterLayout from "_layouts/CenterCenter.layout";

const HelpScreen: FC<NativeStackScreenProps<AppNavigatorParams, "Help">> = ({
  route: {
    params: { content },
  },
}) => (
  <SafeAreaView>
    <CenterCenterLayout>
      <Text>Content:</Text>
      <Text>{content}</Text>
    </CenterCenterLayout>
  </SafeAreaView>
);

export default HelpScreen;
