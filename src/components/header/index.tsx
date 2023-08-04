// import { Container, Text } from "./styles";

import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import Logo from "../../assets/Logo.png";

type headerProps = {};

export function Header({}: headerProps) {
  return (
    <View style={styles.container}>
      <Image source={Logo} />
    </View>
  );
}
