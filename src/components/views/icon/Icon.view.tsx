import { type FC } from "react";
import { Icon } from "@ui-kitten/components";
import { type ImageProps } from "react-native-svg";

type IconViewProps = Partial<ImageProps> & {
  name: string;
  style?: any;
};

const IconView: FC<IconViewProps> = ({
  style: { height, marginVertical, width, tintColor },
  name,
}) => (
  <Icon
    style={{ height, marginVertical, width }}
    fill={tintColor}
    name={name}
  />
);

export default IconView;
