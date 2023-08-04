import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";
import { THEME } from "../../styles/theme";

type InputProps = {};

export function Input({}: InputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={THEME.COLORS.GRAY_300}
        style={styles.input}
      />
    </View>
  );
}
