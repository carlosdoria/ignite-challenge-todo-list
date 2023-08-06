import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { THEME } from "../../styles/theme";

export type CounterProps = {
  text: string;
  counter: number;
  color?: "blue" | "purple";
};

export function Counter({ text, counter, color = "blue" }: CounterProps) {
  const textColor = {
    color: color === "blue" ? THEME.COLORS.BLUE : THEME.COLORS.PURPLE,
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.text, textColor]}>{text}</Text>
      <Text style={styles.counter}>{counter}</Text>
    </View>
  );
}
