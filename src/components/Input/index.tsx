import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { THEME } from "../../styles/theme";

type InputProps = {
  value: string;
  setValue: (value: string) => void;
  onSubmit: () => void;
};

export function Input({ value, setValue, onSubmit }: InputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={THEME.COLORS.GRAY_300}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
}
