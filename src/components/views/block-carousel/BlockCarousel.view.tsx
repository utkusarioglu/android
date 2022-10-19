import { List } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";
import { BlockCard } from "./BlockCard";

const data = [
  {
    title: "hi",
    body: "sss"
  },
  {
    title: "hi2",
    body: "3232"
  }
]

const BlockCarouselView = () => {
  return <View><List
    horizontal={true}
    data={data}
    renderItem={BlockCard} 
    contentContainerStyle={styles.listContainer}
  /></View> 
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 4
  }
})

export default BlockCarouselView;
