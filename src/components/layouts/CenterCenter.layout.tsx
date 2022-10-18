import { type FC, type ReactNode } from "react";
import { Layout } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

type CenterCenterLayoutProps = {
  children?: ReactNode | ReactNode[];
};

const CenterCenterLayout: FC<CenterCenterLayoutProps> = ({ children }) => (
  <Layout style={styles.container}>{children}</Layout>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CenterCenterLayout;
