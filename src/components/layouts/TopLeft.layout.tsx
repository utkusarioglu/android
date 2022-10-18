import { type FC, type ReactNode } from "react";
import { Layout } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

type TopLeftLayoutProps = {
  children?: ReactNode | ReactNode[];
};

const TopLeftLayout: FC<TopLeftLayoutProps> = ({ children }) => (
  <Layout style={styles.container}>{children}</Layout>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TopLeftLayout;
