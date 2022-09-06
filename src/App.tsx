import "react-native-gesture-handler";
import "react-native-get-random-values";
import "@ethersproject/shims";
import React, {
  type PropsWithChildren,
  useEffect,
  useState,
  type FC,
} from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleProp,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ViewStyle,
} from "react-native";
// import { Button } from "@fluentui/react-native";
import { type Block } from "@ethersproject/abstract-provider";
import { provider } from "./infura";
import { NavigationContainer } from "@react-navigation/native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import { FlatList } from "react-native-gesture-handler";

const produceRandom = () => Math.random().toString().slice(2);

const App = () => {
  const [random, setRandom] = useState(produceRandom());
  const [blocks, setBlocks] = useState<Block[]>([]);
  const isDarkMode = useColorScheme() === "dark";

  useEffect(() => {
    setRandom(produceRandom());
    // provider.on("block", (blockNum) => {
    //   provider.getBlock(blockNum).then((block) => {
    //     console.log("new block", blockNum.toString().slice(-2));
    //     setBlocks((prev) => [...new Set<Block>(prev).add(block)]);
    //   });
    // });
    // return () => {
    //   provider.off("block");
    // };
  }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    // flex: 1,
    // height: "100%",
    // flexShi
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <NavigationContainer>
        <FirstContent {...{ isDarkMode, backgroundStyle, blocks, random }} />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

const FirstContent: FC<
  PropsWithChildren<{
    isDarkMode: boolean;
    backgroundStyle: StyleProp<ViewStyle>;
    blocks: Block[];
    random: string;
  }>
> = ({ isDarkMode, backgroundStyle, blocks, random }) => (
  <>
    <ScrollView
      contentInsetAdjustmentBehavior="always"
      style={backgroundStyle}
      // contentContainerStyle={{ flexGrow: 1 }}
    >
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
          height: "100%",
        }}>
        <Text style={{ fontSize: 50, backgroundColor: "pink" }}>Ut</Text>
        <Text style={{ fontSize: 30, backgroundColor: "gray" }}>{random}</Text>
      </View>
    </ScrollView>
    <FlatList
      data={[...blocks]}
      renderItem={({ item: { hash, number } }) => (
        <View style={{ padding: 5 }}>
          <Text style={{ backgroundColor: "gray", color: "white" }}>
            {number.toString().slice(-2)} - {hash.slice(0, 6)}
          </Text>
        </View>
      )}
      keyExtractor={(item) => item.hash}
    />
  </>
);
